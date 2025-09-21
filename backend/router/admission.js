import express, { response } from "express";
import sql from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail"

dotenv.config();

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_KEY)


async function sendEmail(recipient, sub, messageBody) {
  try {

    const msg = {
      to: recipient || ['ayushpanwar3134@gmail.com'],
      from: {
        name: "SMS",
        email: 'serversmart.info@gmail.com'
      },

      subject: sub || "Student Management System",
      text: messageBody || 'Hello from Student Management System',
      html: messageBody
        ? `<strong>${messageBody}</strong>`
        : '<strong>and easy to do anywhere, even with Node.js</strong>'

    }

    const response = await sgMail.send(msg)
    return response[0].statusCode === 202;
  }
  catch (err) {

    return err.message
  }
}


router.post("/formsubmit", async (req, res) => {
  console.log(req.body);
  try {

    const {
      applicationNumber,
      name,
      fatherName,
      motherName,
      dob,
      gender,
      category,
      pwd,
      allIndiaRank,
      categoryRank,
      preference1,
      preference2,
      preference3,
      preference4,
      preference5,
      state,
      email,
      mobileNumber,
    } = req.body;


    const result = await sql
      `INSERT INTO admissions (
        application_number,
        candidate_name,
        fathers_name,
        mothers_name,
        date_of_birth,
        gender,
        category,
        pwd,
        all_india_rank,
        category_rank,
        preference_1,
        preference_2,
        preference_3,
        preference_4,
        preference_5,
        domicile_state,
        email,
        mobile_number
      ) VALUES (
        ${applicationNumber}, ${name}, ${fatherName}, ${motherName}, ${dob}, ${gender}, ${category}, ${pwd === "Yes"},
        ${allIndiaRank}, ${categoryRank}, ${preference1}, ${preference2}, ${preference3}, ${preference4}, ${preference5}, ${state}, ${email}, ${mobileNumber}
      )`


    const emailSubject = "Your Admission Application has been Successfully Registered";

    const emailBody = `
      <h2>Dear ${name},</h2>
      <p>Thank you for submitting your admission application to our institution.</p>
      <p>Your application has been successfully registered. Please keep your application number <strong>${applicationNumber}</strong> safe for future reference.</p>
      <p>You can track your application status on our official college portal.</p>
      <p>For any queries, please contact our admissions office.</p>
      <br>
      <p>Best regards,<br>Admissions Team<br>Student Management System</p>
    `;

    await sendEmail(email, emailSubject, emailBody)

    res.status(201).json({ message: "Form submitted successfully!", data: result[0] });
  } catch (err) {
    console.error(err.message);
    if (err.code === "23505") {
      // Unique constraint violation (email/application_number)
      res.status(400).json({ message: "Application number or Email already registered." });
    } else {
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  }
});

router.post("/checkstatus", async (req, res) => {
  try {
    const { applicationNumber = "" } = req.body;

    const response = await sql`SELECT * FROM admissions
                                WHERE  application_number =${applicationNumber}`
    if (!response.length) {
      return res.json({ alert: "No record found for the given application number." });
    }
    res.json({ message: "success", formdata: response[0] })
  }
  catch (err) {
    res.json({ alert: "No record found for the provided Application Number." });
  }
})

export default router;

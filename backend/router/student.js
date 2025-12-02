import express from "express";
import sql from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import verifyStudentLogin from "../middleware/authenticateStudent.js";
import route from "./makepayment.js";

dotenv.config()

const router = express.Router()



router.post("/portallogin", async (req, res) => {
    const { email = "", password = "" } = req.body;
    

    try {
        const response = await sql`
            SELECT 
            uid, college_email, password_hash
            FROM student
            WHERE college_email = ${email}`;

        if (!response.length) {
            return res.json({ alert: "Email ID is incorrect." });
        }

        const user = response[0];
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return res.json({ alert: "Password is incorrect. Please try again." });
        }

        const token = jwt.sign(
            { id: user.uid, username: email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60,
            sameSite: "none",
        });


        res.json({
            status: "success",
        });
    } catch (err) {

        res.status(500).json({ alert: err.message });
      
    }
});


router.get("/studentprofile", verifyStudentLogin, async (req, res) => {

    try {
        const response = await sql`
                SELECT sid, first_name, last_name, dob, gender, contact_no,
                personal_email, branch_id, uid, college_email, password_hash
                FROM student
                WHERE college_email = ${req.user.college_email}`;
        const user = response[0];

        const branchResult = await sql`
            SELECT department_name
            FROM department
            WHERE department_id = ${user.branch_id}`;

        const branchName = branchResult[0]?.department_name || "N/A";

        const d = new Date(user.dob);
        res.json({

            SID: user.sid,
            Name: `${user.first_name} ${user.last_name}`,
            DOB:  d.toISOString().split("T")[0],
            Gender: user.gender,
            Mobile: user.contact_no,
            Email: user.personal_email,
            Branch: branchName,
        });


    }
    catch (err) {
        console.log(err.message)
        res.json({ alert: err.message })
    }
})





router.get("/gradereport", verifyStudentLogin, async (req, res) => {


    const result = await sql`
        SELECT
            c.courseid,
            c.coursetitle,
            c.credits,
            e.grade,
            co.semester,
            co.year
        FROM
            enrollment e
        JOIN
            courseoffering co ON e.offeringid = co.offeringid
        JOIN
            course c ON co.courseid = c.courseid
        WHERE
            e."SID" = ${req.user.sid}
        ORDER BY
            co.year ASC,
            co.semester ASC;`;



    const response = await sql`
                SELECT sid, first_name, last_name, dob, gender, contact_no,
                personal_email, branch_id, uid, college_email, password_hash
                FROM student
                WHERE college_email = ${req.user.college_email}`;
    const user = response[0];

    const branchResult = await sql`
            SELECT department_name
            FROM department
            WHERE department_id = ${user.branch_id}`;

    const branchName = branchResult[0]?.department_name || "N/A";
    const d = new Date(user.dob);
    const finalReport = [{

        SID: user.sid,
        Name: `${user.first_name} ${user.last_name}`,
        DOB: d.toISOString().split("T")[0],
        Gender: user.gender,
        Mobile: user.contact_no,
        Email: user.personal_email,
        Branch: branchName,
    }, ...result]

    
    res.json({ message: finalReport })
})

router.get("/feereceipt", verifyStudentLogin, async (req, res) => {
    //     SELECT 
    //     PaymentID,
    //     Amount,
    //     PaymentDate,
    //     Status,
    //     PaymentMethod,
    //     Semester,
    //     Year
    // FROM FeePayment
    // WHERE SID = 'STUDENT_ID_HERE'
    // ORDER BY PaymentDate ASC;
    res.json({ message: "will get data after database is finalized." })

}
)

export default router;
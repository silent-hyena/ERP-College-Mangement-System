import express from "express";
import sql from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import verifyLogin from "../middleware/authenticate.js";
import route from "./makepayment.js";

dotenv.config()

const router = express.Router()



router.post("/portallogin", async (req, res) => {

    const { email = "", password = "" } = req.body;



    try {
        const response = await sql`
      SELECT uid, college_email, password_hash
      FROM student
      WHERE college_email = ${email}
    `;

        if (!response.length) {
            return res.json({ alert: "email id is incorrect." });
        }

        const user = response[0];
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return res.json({ alert: "password is incorrect. please try again." });
        }

        // issue JWT token
        const token = jwt.sign(
            { id: user.uid, username: email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60,
            sameSite: "none"
        });


        res.json({ status: "success" });
    } catch (err) {
        res.status(500).json({ alert: err.message });
    }
});

router.get("/gradereport", verifyLogin, async (req, res) => {
    // get grade report  and group by semester wise and display, course id, corse name, credit, grde earned and 
    // retuurn json array of object.
    // example sql:
    //     SELECT
    //     co.Year,
    //         co.Semester,
    //         JSON_ARRAYAGG(
    //             JSON_OBJECT(
    //                 'CourseID', c.CourseID,
    //                 'CourseTitle', c.CourseTitle,
    //                 'Credits', c.Credits,
    //                 'Grade', e.Grade
    //             )
    //         ) AS Courses
    // FROM Enrollment e
    // JOIN CourseOffering co ON e.OfferingID = co.OfferingID
    // JOIN Course c ON co.CourseID = c.CourseID
    // WHERE e.SID = 'STUDENT_ID_HERE'
    // GROUP BY co.Year, co.Semester
    // ORDER BY co.Year ASC,
    //         FIELD(co.Semester, 'Spring', 'Summer', 'Fall');

    res.json({ message: "will get data after database is finalized." })
})

router.get("/feereceipt",verifyLogin,async(req,res)=>{
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
import express from "express"
// import jwt from "jsonwebtoken"
import sql from "../db.js";
import verifyLogin from "../middleware/authenticate.js";
const router = express.Router()

router.get("/showtables", verifyLogin, async (req, res) => {
    try {
        const tables = await sql`
            SELECT 
            table_schema,
            table_name,
            json_agg(column_name ORDER BY ordinal_position) AS columns
            FROM information_schema.columns
            WHERE table_schema = 'public'
            GROUP BY table_schema, table_name
            ORDER BY table_schema, table_name;
        `;
        res.json(tables);
    } catch (err) {
        console.error(err);
        res.status(500).json({alert: "Cannot fetch tables from database."});
    }
})

export default router;
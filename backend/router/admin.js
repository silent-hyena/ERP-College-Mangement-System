import express from "express"
// import jwt from "jsonwebtoken"
import sql from "../db.js";
import verifyLogin from "../middleware/authenticate.js";
const router = express.Router()

router.use(verifyLogin)

router.get("/showtables", async (req, res) => {
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


router.get("/records", async (req, res) => {
  try {
    const { table } = req.query;

    if (!table) {
      return res.status(400).json({ message: "Missing 'table' query parameter" });
    }

    // ✅ Basic validation: allow only alphanumeric + underscore table names
    if (!/^[a-zA-Z0-9_]+$/.test(table)) {
      return res.status(400).json({ message: "Invalid table name" });
    }

    // ⚠️ Tagged template literal prevents SQL injection
    const content = await sql.unsafe(`SELECT * FROM ${table}`);

    res.json(content);
  } catch (error) {
    console.error("Error fetching table records:", error);
    res.status(500).json({ message: "Failed to fetch table data", error: error.message });
  }
});


export default router;
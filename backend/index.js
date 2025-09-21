import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
// import sql from "./db.js";

import paymentRoute from "./router/makepayment.js"
import EmailRoute from "./router/sendEmail.js"
import staffRoute from "./router/staff.js"
import studentRoute from "./router/student.js"
import admissionRoute from "./router/admission.js"

dotenv.config()
const app = express()
app.set('trust proxy', 1); 

app.use(cookieParser())

// CORS is only needed if you still serve frontend from different origin during dev
const allowedOrigins = [
  "http://localhost:5173",        
  "https://collegeerp442.vercel.app"  
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200  
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/makepayment", paymentRoute)
app.use("/emailservice", EmailRoute)
app.use("/staff", staffRoute)
app.use("/student", studentRoute)
app.use("/admission", admissionRoute)

// Serve frontend
const __dirname = path.resolve(); // needed for ES modules
app.use(express.static(path.join(__dirname, "frontend/dist")));

// Send index.html for any unknown route (frontend routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the server</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js"; // Make sure the path is correct
import mentorRouter from "./Routers/mentorRouter.js"; // Make sure the path is correct
import studentRouter from "./Routers/studentRouter.js"; // Make sure the path is correct

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use("/api/mentor", mentorRouter);
app.use("/api/student", studentRouter);

// Connect to MongoDB
connectDB();

// Setting port
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

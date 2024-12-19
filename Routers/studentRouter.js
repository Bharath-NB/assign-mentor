import express from "express";
import {
    createStudent,
    getAllStudents,
} from "../Controllers/studentController.js"; // Import relevant controller functions

const router = express.Router();

// Route for creating a new student
router.post("/create", createStudent);

// Route for getting all students
router.get("/all-students", getAllStudents); // This should be the correct route

export default router;

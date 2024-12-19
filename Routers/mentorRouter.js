import express from "express";
import {
    createMentor,
    getAllMentors,
    assignStudentsToMentor,
    changeMentor,  // Ensure that changeMentor is imported correctly
    getStudentsForMentor,
    getPreviousMentors
} from "../Controllers/mentorController.js"; // Ensure the path is correct

const router = express.Router();

// Routes for mentor operations
router.post("/create", createMentor);
router.get("/all-mentors", getAllMentors);
router.put("/assign/:id", assignStudentsToMentor);
router.put("/change-mentor/:id", changeMentor); // Ensure this line is correct
router.get("/students/:id", getStudentsForMentor);
router.get("/previous-mentors/:id", getPreviousMentors);

export default router;

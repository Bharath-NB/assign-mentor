import Student from "../Models/studentSchema.js";

// 1. Create student
export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// 2. Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().where('mentId').exists(false);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

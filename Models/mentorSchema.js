import mongoose from "mongoose";

// Mentor Schema
const mentorSchema = mongoose.Schema({
    name: String,
    email: String,
    batch: String
});

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;

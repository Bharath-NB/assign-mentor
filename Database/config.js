import mongoose from "mongoose";
import dotenv from "dotenv";

// Environment variables
dotenv.config();

// MongoDB URL
const MONGODB_URL = process.env.MONGODB_URL;

// Database Connection
const connectDB = async () => {
    try {
        if (!MONGODB_URL) {
            throw new Error("MongoDB URL not set in environment variables");
        }
        // Remove deprecated options
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectDB;

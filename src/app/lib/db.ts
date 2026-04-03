import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // If we're already connected, don't do anything
        if (mongoose.connection.readyState >= 1) return;

        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.log("❌ MongoDB Connection Error:", error);
    }
};

export default connectDB;
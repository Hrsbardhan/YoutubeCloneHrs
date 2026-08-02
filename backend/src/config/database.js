import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(env.mongoUri);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database Connection Failed");
        console.error(error.message);
        process.exit(1);
    }
};

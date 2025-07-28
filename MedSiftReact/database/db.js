import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.DATABASE_URL;


export const connectDB = async () => {
    try {
    const conn = await mongoose.connect(connectionString);
    console.log(`Connected to MongoDB successfully at ${conn.connection.host}`);
    } catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 is success, 0 is failure
    }
}
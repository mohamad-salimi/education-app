import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI as string;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`❌ MongoDB connection error: ${err.message}`);
    } else {
      console.error(
        "❌ An unknown error occurred while connecting to MongoDB.",
      );
    }
    process.exit(1);
  }
};

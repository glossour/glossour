import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined.");
    }

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to DataBase!");
  } catch (error) {
    console.error(`Some error occurred while connecting to DataBase: ${error}`);
  }
};

import mongoose from "mongoose";

const connectDB = async (url: any) => {
  try {
    const connection = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error}`);
  }
};

export default connectDB;
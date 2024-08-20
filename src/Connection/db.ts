import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

// MongoDB URI
const dbURI = process.env.MONGODB_URI;

//
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(`${dbURI}`);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(" error :", error);
  }
};

export default dbConnect;

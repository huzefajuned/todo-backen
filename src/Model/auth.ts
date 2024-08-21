import mongoose from "mongoose";
import { authSchemaInterface } from "../types/auth";

const auth = new mongoose.Schema<authSchemaInterface>({
  username: {
    type: String,
    required: false,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 8, max: 16 },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, required: false, default: Date.now },
});

const authSchema = mongoose.model<authSchemaInterface>("auth", auth);

export default authSchema;

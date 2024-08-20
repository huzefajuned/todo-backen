import mongoose, { model } from "mongoose";

const todo = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  type: {
    type: String,
  },
});

const todoModel = model("todo", todo);

export default todoModel;

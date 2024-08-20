import { NextFunction, Request, Response } from "express";
import todoModel from "../Model/todo";

// create a new todo
const createTODO = async (req: Request, res: Response, next: NextFunction) => {
  const { ...data } = req.body;
  console.log("data", data);
  try {
    // const r: any = await todoModel.create(data);
    // if (!r) return r.status(400).json({ message: "Something went wrong!" });
    // r.status(201).json({ message: "todo created", r });
    res.status(201).json({ message: " fake todo created" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong!" });
  }
};

export default createTODO;

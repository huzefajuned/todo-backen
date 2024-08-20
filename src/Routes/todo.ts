import express, { Request, Response } from "express";
import createTODO from "../Controller/todo";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.post("/create", createTODO);

export default router;

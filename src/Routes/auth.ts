import express from "express";
import register from "../Controller/auth";
import login from "../Controller/auth";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;

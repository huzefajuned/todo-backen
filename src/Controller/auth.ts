import { Request, Response } from "express";
import authSchema from "../Model/auth";
import bcrypt from "bcryptjs";
import { registerInterface } from "../types/auth";

/**
 * register
 * @param email password
 */

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //    hash password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const payload: registerInterface = {
    name,
    email,
    password: hashPassword,
  };

  try {
    // const register = await authSchema.create(payload);
    // console.log("register :", register);
    console.log("password :", password);
    console.log("hashPassword :", hashPassword);
  } catch (error) {
    console.log("error :", error);
  }
};


/**
 * login
 * @param
 */
const login = async (req: Request, res: Response) => {
  try {
    // const login= await
  } catch (error) {}
};

export default [register, login];

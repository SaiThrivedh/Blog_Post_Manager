import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
 const secret = process.env.SECRET_KEY as string;

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Wrong password" });

 
  if (user.role === "admin" && !user.isActive) {
    return res.status(403).json({ msg: "Admin account is deactivated" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    secret,
    { expiresIn: "1h" }
  );

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
};
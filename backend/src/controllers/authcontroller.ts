import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "secret"
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
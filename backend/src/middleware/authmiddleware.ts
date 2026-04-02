import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";

dotenv.config()
const secret = process.env.SECRET_KEY as string

export const auth = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } 
  
  
  catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export const isSuperAdmin = (req: any, res: Response, next: NextFunction) => {
  if (req.user.role !== "superadmin")
    return res.status(403).json({ msg: "Forbidden" });

  next();
};
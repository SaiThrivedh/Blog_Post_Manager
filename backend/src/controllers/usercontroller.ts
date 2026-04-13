import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";

export const createAdmin = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

 
  if (role === "superadmin") {
    return res.status(403).json({ msg: "Cannot create superadmin" });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash,
    role: "admin",
  });

  res.json(user);
};



export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({
    where: { role: "admin" } 
  });

  res.json(users);
};



export const getUserById = async (req:Request<{ id: string }>, res:Response) =>{
       const id = parseInt(req.params.id);
       const user = await User.findByPk(id);
       res.json(user);
}



export const updateUser = async (req: any, res: Response) => {
  const id = parseInt(req.params.id);
  const { isActive } = req.body;

  const user:any = await User.findByPk(id);
  if (!user) return res.status(404).json({ msg: "User not found" });

  
  if (user.role === "superadmin") {
    return res.status(403).json({ msg: "Cannot modify superadmin" });
  }

  await user.update({ isActive });

  res.json(user);
};



export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);

  const user:any = await User.findByPk(id);
  if (!user) return res.status(404).json({ msg: "User not found" });

 
  if (user.role === "superadmin") {
    return res.status(403).json({ msg: "Cannot delete superadmin" });
  }

  await user.destroy();

  res.json({ msg: "User deleted" });
};


export const profile = async(req:any,res:Response) =>{

  const id = req.user.id;

  const user = await User.findByPk(id);
   if (!user) return res.status(404).json({ msg: "User not found" });

  res.json(user);
   
}
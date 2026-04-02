import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";

export const createAdmin = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash,
    role: "admin",
  });

  res.json(user);
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req:Request<{ id: string }>, res:Response) =>{
       const id = parseInt(req.params.id);
       const user = await User.findByPk(id);
       res.json(user);
}

export const updateUser = async ( req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const { isActive } = req.body;

  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ msg: "User not found" });


  if (isActive === undefined) {
    return res.status(400).json({ msg: "isActive required" });
  }

  await user.update({ isActive });

  res.json(user);
};

export const deleteUser = async (req: Request<{ id: string }>,res: Response) => {
  const id = parseInt(req.params.id); 

  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ msg: "User not found" });

  await user.destroy();

  res.json({ msg: "User deleted" });
};


export const profile = async(req:Request<{ id: string }>,res:Response) =>{

  const id = parseInt(req.params.id);

  const user = await User.findByPk(id);
   if (!user) return res.status(404).json({ msg: "User not found" });

  res.json(user);
   
}
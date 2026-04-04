import { Request, Response } from "express";
import { Post } from "../models";
import { User } from "../models";

export const createPost = async (req: any, res: Response) => {
  const post = await Post.create({
    ...req.body,
    authorId: req.user.id,
  });

  res.json(post);
};

export const getPosts = async (_: Request, res: Response) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "name", "email", "role"],
      },
    ],
  });

  res.json(posts);
};

export const getPublished = async (_: Request, res: Response) => {
  const posts = await Post.findAll({
    where: { status: "published" },
  });
  res.json(posts);
};

export const updatePost = async (req: Request, res: Response) => {
  await Post.update(req.body, { where: { id: req.params.id } });
  res.json({ msg: "Updated" });
};

export const deletePost = async (req: Request, res: Response) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.json({ msg: "Deleted" });
};
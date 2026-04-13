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

export const getPosts = async (req: Request, res: Response) => {
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

export const getPublished = async (req: Request, res: Response) => {
  const posts = await Post.findAll({
    where: { status: "published" },
    include: [
      {
        model: User,
        attributes: ["id", "name"],
      }
    ]


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

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
        
      },
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};




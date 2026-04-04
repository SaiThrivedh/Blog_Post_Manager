import express from "express";
import {
  createPost,
  getPosts,
  getPublished,
  updatePost,
  deletePost,
  getSinglePost,
} from "../controllers/postcontroller";
import { auth } from "../middleware/authmiddleware";

const router = express.Router();

router.get("/published", getPublished);
router.get("/", auth, getPosts);
router.post("/", auth, createPost);
router.get("/:id",  getSinglePost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
import express from "express";
import {
  createPost,
  getPosts,
  getPublished,
  updatePost,
  deletePost,
  getSinglePost,
  getPostsByCategory,
} from "../controllers/postcontroller";
import { auth } from "../middleware/authmiddleware";

const router = express.Router();

router.get("/published", getPublished);
router.get("/", auth, getPosts);
router.get("/category/:category", auth, getPostsByCategory);
router.post("/", auth, createPost);
router.get("/:id",  getSinglePost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
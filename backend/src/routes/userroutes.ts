import express from "express";
import { createAdmin, getUsers , updateUser, deleteUser , getUserById, profile} from "../controllers/usercontroller";
import { auth, isSuperAdmin } from "../middleware/authmiddleware";

const router = express.Router();

router.post("/", auth, isSuperAdmin, createAdmin);
router.get("/", auth, isSuperAdmin, getUsers);
router.get("/:id", auth, isSuperAdmin, getUserById);
router.put("/:id", auth, isSuperAdmin, updateUser);
router.delete("/:id", auth, isSuperAdmin, deleteUser);
router.get("/profile", auth , profile);

export default router;
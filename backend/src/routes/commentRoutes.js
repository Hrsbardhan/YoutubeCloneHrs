import express from "express";
import {
    createComment,
    getComments,
    deleteComment
} from "../controllers/commentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json([]);
});

router.get("/:videoId", getComments);

router.post("/", protect, createComment);

router.delete("/:id", protect, deleteComment);

export default router;

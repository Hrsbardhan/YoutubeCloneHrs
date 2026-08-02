import express from "express";
import {
    createVideo,
    getVideos,
    getVideoById
} from "../controllers/videoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideoById);
router.post("/", protect, createVideo);

export default router;

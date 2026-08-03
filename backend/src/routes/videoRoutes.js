import express from "express";
import {
    createVideo,
    getVideos,
    getVideoById,
    updateVideo,
    deleteVideo
} from "../controllers/videoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getVideos);

router.get("/:id", getVideoById);

router.post("/", protect, createVideo);

router.put("/:id", protect, updateVideo);

router.delete("/:id", protect, deleteVideo);

export default router;

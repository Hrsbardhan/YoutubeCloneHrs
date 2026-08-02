import express from "express";
import {
    createPlaylist,
    getPlaylists,
    addVideoToPlaylist
} from "../controllers/playlistController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getPlaylists);
router.post("/", protect, createPlaylist);
router.post("/:id/videos", protect, addVideoToPlaylist);

export default router;

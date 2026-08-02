import express from "express";
import authRoutes from "./authRoutes.js";
import channelRoutes from "./channelRoutes.js";
import videoRoutes from "./videoRoutes.js";
import commentRoutes from "./commentRoutes.js";
import playlistRoutes from "./playlistRoutes.js";
import searchRoutes from "./searchRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/channels", channelRoutes);
router.use("/videos", videoRoutes);
router.use("/comments", commentRoutes);
router.use("/playlists", playlistRoutes);
router.use("/search", searchRoutes);

export default router;

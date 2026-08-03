import express from "express";

import {
    createPlaylist,
    getPlaylists,
    getPlaylistById,
    updatePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist
} from "../controllers/playlistController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get(
    "/",
    protect,
    getPlaylists
);


router.get(
    "/:id",
    protect,
    getPlaylistById
);


router.post(
    "/",
    protect,
    createPlaylist
);


router.put(
    "/:id",
    protect,
    updatePlaylist
);


router.post(
    "/:id/videos",
    protect,
    addVideoToPlaylist
);


router.delete(
    "/:id/videos/:videoId",
    protect,
    removeVideoFromPlaylist
);


router.delete(
    "/:id",
    protect,
    deletePlaylist
);


export default router;

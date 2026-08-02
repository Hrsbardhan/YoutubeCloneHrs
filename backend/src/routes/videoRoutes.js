import { Router } from "express";

import {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo
} from "../controllers/videoController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/",getVideos);

router.get("/:id",getVideo);

router.post("/",authMiddleware,createVideo);

router.put("/:id",authMiddleware,updateVideo);

router.delete("/:id",authMiddleware,deleteVideo);

export default router;

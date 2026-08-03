import express from "express";

import {
    createVideo,
    getVideos,
    getVideoById,
    updateVideo,
    deleteVideo
} from "../controllers/videoController.js";

import { protect } from "../middleware/authMiddleware.js";
import { videoValidationRules } from "../middleware/videoValidation.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.get("/", getVideos);

router.get("/:id", getVideoById);

router.post(
    "/",
    protect,
    videoValidationRules,
    validateRequest,
    createVideo
);

router.put(
    "/:id",
    protect,
    videoValidationRules,
    validateRequest,
    updateVideo
);

router.delete(
    "/:id",
    protect,
    deleteVideo
);

export default router;
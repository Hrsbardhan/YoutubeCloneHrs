import express from "express";
import {
    createChannel,
    getChannels
} from "../controllers/channelController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getChannels);
router.post("/", protect, createChannel);

export default router;

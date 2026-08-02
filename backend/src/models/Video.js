import mongoose from "mongoose";
import commentSchema from "./Comment.js";

const videoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
            index: true,
        },
        description: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            required: true,
            index: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel",
            required: true,
            index: true,
        },
        uploader: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        views: {
            type: Number,
            default: 0,
            min: 0,
        },
        likes: {
            type: Number,
            default: 0,
            min: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
            min: 0,
        },
        comments: [commentSchema],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

videoSchema.index({ title: "text", description: "text" });

export default mongoose.model("Video", videoSchema);

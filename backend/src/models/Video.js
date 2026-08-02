import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel",
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            default: ""
        },
        videoUrl: {
            type: String,
            required: true
        },
        thumbnailUrl: {
            type: String,
            default: ""
        },
        views: {
            type: Number,
            default: 0
        },
        category: {
            type: String,
            default: "General"
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Video", videoSchema);

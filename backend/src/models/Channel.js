import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
    {
        channelName: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,
            unique: true,
            index: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        description: {
            type: String,
            default: "",
            maxlength: 1000,
        },
        bannerUrl: {
            type: String,
            default: "",
        },
        subscribers: {
            type: Number,
            default: 0,
            min: 0,
        },
        videos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Channel", channelSchema);

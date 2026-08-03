import Video from "../models/Video.js";

export const createVideo = async (req, res) => {
    try {
        const video = await Video.create({
            ...req.body,
            owner: req.user._id
        });

        res.status(201).json(video);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find()
            .populate("owner", "username")
            .populate("channel", "name");

        res.json(videos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id)
            .populate("owner", "username")
            .populate("channel", "name");

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        video.views += 1;

        await video.save();

        res.json(video);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const updateVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        if (video.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        video.title = req.body.title ?? video.title;
        video.description = req.body.description ?? video.description;
        video.videoUrl = req.body.videoUrl ?? video.videoUrl;
        video.thumbnailUrl = req.body.thumbnailUrl ?? video.thumbnailUrl;
        video.category = req.body.category ?? video.category;

        await video.save();

        res.json(video);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const deleteVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        if (video.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        await video.deleteOne();

        res.json({
            message: "Video deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

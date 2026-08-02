import Video from "../models/Video.js";

export const searchVideos = async (req, res) => {
    try {
        const {
            query,
            category
        } = req.query;

        const filter = {};

        if (query) {
            filter.$or = [
                {
                    title: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: query,
                        $options: "i"
                    }
                }
            ];
        }

        if (category) {
            filter.category = category;
        }

        const videos = await Video.find(filter)
            .populate("owner", "username")
            .populate("channel", "name");

        res.json(videos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

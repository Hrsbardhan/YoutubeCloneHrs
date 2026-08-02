import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body;

        const channel = await Channel.create({
            owner: req.user._id,
            name,
            description
        });

        res.status(201).json(channel);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getChannels = async (req, res) => {
    try {
        const channels = await Channel.find()
            .populate("owner", "username");

        res.json(channels);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

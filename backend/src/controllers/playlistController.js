import Playlist from "../models/Playlist.js";

export const createPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.create({
            owner: req.user._id,
            title: req.body.title,
            description: req.body.description
        });

        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({
            owner: req.user._id
        }).populate("videos");

        res.json(playlists);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const addVideoToPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({
                message: "Playlist not found"
            });
        }

        playlist.videos.push(req.body.videoId);

        await playlist.save();

        res.json(playlist);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

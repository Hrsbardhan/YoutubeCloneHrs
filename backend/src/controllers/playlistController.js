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

export const getPlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id)
            .populate("videos");

        if (!playlist) {
            return res.status(404).json({
                message: "Playlist not found"
            });
        }

        res.json(playlist);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updatePlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({
                message: "Playlist not found"
            });
        }

        if (playlist.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        playlist.title = req.body.title ?? playlist.title;
        playlist.description =
            req.body.description ?? playlist.description;

        await playlist.save();

        res.json(playlist);

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

        if (playlist.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        if (!playlist.videos.includes(req.body.videoId)) {
            playlist.videos.push(req.body.videoId);
        }

        await playlist.save();

        res.json(playlist);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const removeVideoFromPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({
                message: "Playlist not found"
            });
        }

        if (playlist.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        playlist.videos = playlist.videos.filter(
            video =>
                video.toString() !== req.params.videoId
        );

        await playlist.save();

        res.json(playlist);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deletePlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({
                message: "Playlist not found"
            });
        }

        if (playlist.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        await playlist.deleteOne();

        res.json({
            message: "Playlist deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            user: req.user._id,
            video: req.body.video,
            text: req.body.text
        });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({
            video: req.params.videoId
        })
            .populate("user", "username");

        res.json(comments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        if (comment.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Not authorized"
            });
        }

        await comment.deleteOne();

        res.json({
            message: "Comment deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

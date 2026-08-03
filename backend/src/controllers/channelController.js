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
            .populate(
                "owner",
                "username"
            );


        res.json(channels);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


export const getChannelById = async (req, res) => {

    try {

        const channel = await Channel.findById(
            req.params.id
        )
        .populate(
            "owner",
            "username"
        );


        if (!channel) {

            return res.status(404).json({
                message: "Channel not found"
            });

        }


        res.json(channel);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


export const updateChannel = async (req, res) => {

    try {

        const channel = await Channel.findById(
            req.params.id
        );


        if (!channel) {

            return res.status(404).json({
                message: "Channel not found"
            });

        }


        if (
            channel.owner.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Not authorized"
            });

        }


        channel.name =
            req.body.name ??
            channel.name;


        channel.description =
            req.body.description ??
            channel.description;


        await channel.save();


        res.json(channel);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


export const deleteChannel = async (req, res) => {

    try {

        const channel = await Channel.findById(
            req.params.id
        );


        if (!channel) {

            return res.status(404).json({
                message: "Channel not found"
            });

        }


        if (
            channel.owner.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Not authorized"
            });

        }


        await channel.deleteOne();


        res.json({
            message: "Channel deleted"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

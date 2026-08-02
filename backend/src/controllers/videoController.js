import Video from "../models/Video.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import AppError from "../utils/AppError.js";

export const getVideos = asyncHandler(async (req, res) => {

    const videos = await Video.find()
        .populate("channel")
        .populate("uploader");

    return res.json(
        new ApiResponse(200,"Videos fetched",videos)
    );

});

export const getVideo = asyncHandler(async (req,res)=>{

    const video = await Video.findById(req.params.id);

    if(!video){
        throw new AppError("Video not found",404);
    }

    return res.json(
        new ApiResponse(200,"Video fetched",video)
    );

});

export const createVideo = asyncHandler(async(req,res)=>{

    const video = await Video.create(req.body);

    return res.status(201).json(
        new ApiResponse(201,"Video created",video)
    );

});

export const updateVideo = asyncHandler(async(req,res)=>{

    const video = await Video.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    if(!video){
        throw new AppError("Video not found",404);
    }

    return res.json(
        new ApiResponse(200,"Video updated",video)
    );

});

export const deleteVideo = asyncHandler(async(req,res)=>{

    const video = await Video.findByIdAndDelete(req.params.id);

    if(!video){
        throw new AppError("Video not found",404);
    }

    return res.json(
        new ApiResponse(200,"Video deleted")
    );

});

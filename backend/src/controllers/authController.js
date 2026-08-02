import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import AppError from "../utils/AppError.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const register = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
        $or: [{ email }, { username }]
    });

    if (existingUser) {
        throw new AppError("User already exists", 409);
    }

    const user = await User.create({
        username,
        email,
        password: await hashPassword(password),
    });

    return res.status(201).json(
        new ApiResponse(201, "User registered successfully", {
            id: user._id,
            username: user.username,
            email: user.email,
        })
    );
});

export const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    const matched = await comparePassword(password, user.password);

    if (!matched) {
        throw new AppError("Invalid credentials", 401);
    }

    const token = generateToken({
        id: user._id,
        email: user.email,
    });

    return res.json(
        new ApiResponse(200, "Login successful", {
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        })
    );
});

export const profile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id)
        .select("-password");

    return res.json(
        new ApiResponse(200, "Profile fetched", user)
    );

});

import { body } from "express-validator";

export const videoValidationRules = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("videoUrl")
        .trim()
        .notEmpty()
        .withMessage("Video URL is required"),

    body("category")
        .optional()
        .trim()
];

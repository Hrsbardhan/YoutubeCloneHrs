import { body } from "express-validator";

export const registerValidation = [

    body("username")
        .trim()
        .isLength({ min: 3, max: 30 }),

    body("email")
        .isEmail()
        .normalizeEmail(),

    body("password")
        .isLength({ min: 6 })

];

export const loginValidation = [

    body("email")
        .isEmail(),

    body("password")
        .notEmpty()

];

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

    res.json({
        success:true,
        message:"Youtube Clone API Running"
    });

});

app.use("/api/auth",authRoutes);

app.use("/api/videos",videoRoutes);

app.use(errorHandler);

export default app;

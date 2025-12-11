import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import sttRoute from "./routes/stt.js";
import chatRoute from "./routes/chat.js";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());

app.use("/api/v1/stt", sttRoute);
app.use("/api/v1/chat", chatRoute);

app.get('/health', (req, res) => {
    res.status(200)
    .json({
        status: "Health is okay.",
        timestamp: Date.now()
    })
});

app.listen(5000, () => 
    console.log("Server running on 5000")
);

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());


app.listen(5000, () => 
    console.log("Server running on 5000")
);

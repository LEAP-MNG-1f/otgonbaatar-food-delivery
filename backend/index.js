import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import orderRouter from "./routes/order.route.js";
import categoryRouter from "./routes/category.route.js";
import foodRouter from "./routes/food.route.js";

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(cors());

dotenv.config();

const MAIN_URL = "/api";

server.use(MAIN_URL, userRouter);
server.use(MAIN_URL, orderRouter);
server.use(MAIN_URL, categoryRouter);
server.use(MAIN_URL, foodRouter);

mongoose.connect(process.env.MONGODB_URL);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});

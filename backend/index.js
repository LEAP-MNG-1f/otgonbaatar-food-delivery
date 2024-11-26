import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import foodRouter from "./routes/foodRoute.js";

const server = express();
const PORT = 8000;

dotenv.config();

server.use(express.json());
server.use(cors());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);
server.use("/api", foodRouter);

mongoose.connect(
  "mongodb+srv://theotgonbaatar56:YXjGni3aMHaC35TW@otgonbaatar-test.7rcg2.mongodb.net/food-delivery"
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.get("/", async (req, res) => {
  const db = await connectDB();
  let collection = db.collection("User");
  let result = await collection.find().toArray();

  res.json({ success: true, data: result });
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});

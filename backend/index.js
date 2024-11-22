import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";

const server = express();
const PORT = 8000;

dotenv.config();

server.use(cors());

server.get("/", async (req, res) => {
  const db = await connectDB();
  let collection = db.collection("User");
  let result = await collection.find().toArray();

  res.json({ success: true, data: result });
});

server.get("/food", async (req, res) => {
  try {
    const db = await connectDB();
    let collection = db.collection("Food");
    let result = await collection.find().toArray();

    res.json({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
});

server.post("/image", async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const uploadResult = await cloudinary.uploader
      .upload("./assets/image1.png", {
        public_id: "shoes",
      })
      .catch((error) => {
        console.log(error);
      });
    res.status(200).json("amjilttai");
    console.log(uploadResult);
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});

// (async function () {
//   // const optimizeUrl = cloudinary.url("shoes", {
//   //   fetch_format: "auto",
//   //   quality: "auto",
//   // });
//   // console.log(optimizeUrl);
//   // const autoCropUrl = cloudinary.url("shoes", {
//   //   crop: "auto",
//   //   gravity: "auto",
//   //   width: 500,
//   //   height: 500,
//   // });
//   // console.log(autoCropUrl);
// })();

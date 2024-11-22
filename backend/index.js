import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import multer from "multer";

const server = express();
const PORT = 8000;

dotenv.config();

server.use(express.json());
server.use(cors({ origin: "*" }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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

server.post("/create-food", upload.single("image"), async (req, res) => {
  try {
    const { name, ingredient, price } = req.body;

    const imageFilePath = "./assets/image4.png";

    const uploadResult = await cloudinary.uploader.upload(imageFilePath, {
      folder: "foods",
    });

    const db = await connectDB();
    const collection = db.collection("Food");

    const result = await collection.insertOne({
      name: name,
      image: uploadResult.url,
      ingredient: ingredient,
      price: price,
    });

    res.status(201).json({
      success: true,
      message: "Бараа амжилттай үүсгэсэн",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Алдаа гарлаа" });
  }
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});

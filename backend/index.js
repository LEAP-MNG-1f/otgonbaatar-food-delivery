import express from "express";
import cors from "cors";
const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", (req, res) => {
  // res.send("get huselt irlee");
  res.json({ message: "Success", data: "Food-Delivery API" });
});

server.listen(PORT, () => {
  console.log(`Сервер ажиллаж эхллээ http://localhost:${PORT}`);
});

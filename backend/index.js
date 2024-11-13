import express from "express";

const server = express();
const PORT = 8000;

server.get("/", (req, res) => {
  res.send("get huselt irlee");
});

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});

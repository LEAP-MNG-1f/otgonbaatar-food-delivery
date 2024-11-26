import exrpess from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controllers/foodController.js";
import multer from "multer";

const upload = multer({ dest: "./uploads/" });
const foodRouter = exrpess.Router();

foodRouter.get("/foods", getFood);
foodRouter.post("/create-food", upload.single("image"), createFood);
foodRouter.put("/update-food/:id", updateFood);
foodRouter.delete("/delete-food/:id", deleteFood);

export default foodRouter;

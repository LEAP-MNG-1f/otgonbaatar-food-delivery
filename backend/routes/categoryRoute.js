import express from "express";

import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/create-category", createCategory);
categoryRouter.put("/update-category/:id", updateCategory);
categoryRouter.delete("/delete-category/:id", deleteCategory);

export default categoryRouter;

import express from "express";

import {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getOrder);
orderRouter.post("/create-order", createOrder);
orderRouter.put("/update-order/:id", updateOrder);
orderRouter.delete("/delete-order/:id", deleteOrder);

export default orderRouter;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orderNumber: { type: Number, required: true },
  foods: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  process: {
    type: String,
    enum: ["Progress", "Delivered", "Waiting", "Active"],
    default: "Waiting",
  },
  createdDate: { type: Date, required: true, default: Date.now() },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;

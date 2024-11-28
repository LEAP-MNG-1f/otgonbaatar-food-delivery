import mongoose, { SchemaType } from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: { type: Number, required: true },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
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

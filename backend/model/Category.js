import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foodId: {
    type: String,
    default: "",
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;

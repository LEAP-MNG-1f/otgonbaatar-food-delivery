import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);
export default Food;

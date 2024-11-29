import Food from "../models/food.js";
import { v2 as cloudinary } from "cloudinary";

const getFood = async (request, response) => {
  const result = await Food.find().populate("categoryId");
  response.json({ success: true, data: result });
};

const createFood = async (request, response) => {
  try {
    const { name, ingredient, price, categoryId } = request.body;
    const file = request.file;

    if (!file) {
      return response
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "foods",
    });

    const result = await Food.create({
      name,
      image: uploadResult.url,
      ingredient,
      price,
      categoryId,
    });

    response.status(201).json({
      success: true,
      message: "Food item created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error creating food" });
  }
};

const updateFood = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, image, ingredient, price } = request.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid Food ID" });
    }

    const result = await Food.findByIdAndUpdate(
      id,
      { name, image, ingredient, price },
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error updating food",
    });
  }
};

const deleteFood = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid Food" });
  }
  const result = await Food.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({
      success: false,
      message: "Food not found",
    });
  }
  response.json({ success: true, data: result });
};

export { createFood, getFood, updateFood, deleteFood };

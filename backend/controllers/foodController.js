import Food from "../model/Food.js";
import { v2 as cloudinary } from "cloudinary";

// Get all foods
const getFood = async (request, response) => {
  const result = await Food.find();
  response.json({ success: true, data: result });
};

// Create food (with image upload)
const createFood = async (request, response) => {
  try {
    const { name, ingredient, price } = request.body;
    const file = request.file;

    if (!file) {
      return response
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    // Upload the image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "foods",
    });

    const result = await Food.create({
      name,
      image: uploadResult.url, // Store the Cloudinary image URL
      ingredient,
      price,
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

// Update food
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

// Delete food
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
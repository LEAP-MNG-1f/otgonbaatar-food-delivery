import Category from "../models/category.js";

const getCategory = async (request, response) => {
  const result = await Category.find();
  response.json({ success: true, data: result });
};

const createCategory = async (request, response) => {
  try {
    const { name, foodId } = request.body;

    const result = await Category.create({ name, foodId: foodId || "" });

    response.status(201).json({ success: true, data: result });
  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({
        success: false,
        message: error.message,
        errors: error.errors,
      });
    }
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error creating category",
    });
  }
};

const updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, foodId } = request.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid user Category" });
    }

    const result = await Category.findByIdAndUpdate(
      id,
      { name, foodId },
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error updating category",
    });
  }
};

const deleteCategory = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid user Category" });
  }
  const result = await Category.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({
      success: false,
      message: "Category not found",
    });
  }
  response.json({ success: true, data: result });
};

export { getCategory, createCategory, updateCategory, deleteCategory };

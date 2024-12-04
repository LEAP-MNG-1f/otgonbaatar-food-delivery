import Order from "../models/order.js";

// Get all orders
const getOrder = async (request, response) => {
  try {
    const result = await Order.find().populate("userId").populate("foodIds");
    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error fetching orders" });
  }
};

// Create a new order
const createOrder = async (request, response) => {
  try {
    const {
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      createdDate,
      district,
      khoroo,
      apartment,
    } = request.body;

    // Validate required fields
    if (
      !userId ||
      !orderNumber ||
      !foodIds ||
      !totalPrice ||
      !process ||
      !district ||
      !khoroo ||
      !apartment
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const newOrder = new Order({
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      createdDate,
      district,
      khoroo,
      apartment,
    });

    const savedOrder = await newOrder.save();
    response.status(200).json({ success: true, data: savedOrder });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error creating order" });
  }
};

// Create a hardcoded order (for testing purposes)
const createOrder1 = async (request, response) => {
  try {
    const result = await Order.create({
      userId: "6744e90d0fcf8e11c199b18c",
      orderNumber: 1001,
      foodIds: ["6744d47f9edb65431b93dfda", "6744d58db0ef819e16d38c47"],
      totalPrice: 25000,
      process: "Waiting",
      createdDate: Date.now(),
      district: "Baynzurh",
      khoroo: "14-r horoo",
      apartment: "23-r bair",
    });

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error creating hardcoded order" });
  }
};

// Update an existing order
const updateOrder = async (request, response) => {
  try {
    const { id } = request.params;
    const {
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      createdDate,
      district,
      khoroo,
      apartment,
    } = request.body;

    // Check if the ID is valid
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid order ID" });
    }

    // Validate required fields
    if (
      !userId ||
      !orderNumber ||
      !foodIds ||
      !totalPrice ||
      !process ||
      !district ||
      !khoroo ||
      !apartment
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        userId,
        orderNumber,
        foodIds,
        totalPrice,
        process,
        createdDate,
        district,
        khoroo,
        apartment,
      },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return response
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    response.json({ success: true, data: updatedOrder });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error updating order" });
  }
};

// Delete an order
const deleteOrder = async (request, response) => {
  try {
    const { id } = request.params;

    // Check if the ID is valid
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid order ID" });
    }

    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return response
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    response.json({ success: true, data: deletedOrder });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ success: false, message: "Error deleting order" });
  }
};

export { getOrder, createOrder, updateOrder, deleteOrder };

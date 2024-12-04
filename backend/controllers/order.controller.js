import Order from "../models/order.js";

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

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid order ID" });
    }

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

const deleteOrder = async (request, response) => {
  try {
    const { id } = request.params;

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

import Order from "../models/order.js";

const getOrder = async (request, response) => {
  const result = await Order.find().populate("userId").populate("foodIds");
  response.json({ success: true, data: result });
};

const createOrder = async (request, response) => {
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
};

const updateOrder = async (request, response) => {
  try {
    const { id } = request.params;
    const {
      userId,
      orderNumber,
      foods,
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
        .json({ success: false, message: "Invalid order" });
    }

    const result = await Order.findByIdAndUpdate(
      id,
      {
        userId,
        orderNumber,
        foods,
        totalPrice,
        process,
        createdDate,
        district,
        khoroo,
        apartment,
      },
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error updating order",
    });
  }
};

const deleteOrder = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid user ID" });
  }

  const result = await Order.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({
      success: false,
      message: "Order not found",
    });
  }
  response.json({ success: true, data: result });
};

export { getOrder, createOrder, updateOrder, deleteOrder };

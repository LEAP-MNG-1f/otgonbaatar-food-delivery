import User from "../models/User.js";

const getUser = async (request, response) => {
  const result = await User.find();
  response.json({ success: true, data: result });
};

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Otgonbaatar",
    email: "otgonbaatar@gmail.com",
    password: "5656",
    phoneNumer: 99119911,
  });

  response.json({ success: true, data: result });
};

const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, password, phoneNumber, role } = request.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    const result = await User.findByIdAndUpdate(
      id,
      { name, email, password, phoneNumber, role },
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    response.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      success: false,
      message: "Error updating user",
    });
  }
};

const deleteUser = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid user ID" });
  }
  const result = await User.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  response.json({ success: true, data: result });
};

export { createUser, getUser, updateUser, deleteUser };

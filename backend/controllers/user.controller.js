import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const getUser = async (request, response) => {
  const result = await User.find();
  response.json({ success: true, data: result });
};

const createUser = async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      phoneNumber,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating user" });
  }
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      return res
        .status(500)
        .json({ success: false, message: "Server error: secret key missing" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: "1h",
    });

    res.json({
      success: true,
      data: { token },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { createUser, getUser, updateUser, deleteUser, loginUser };

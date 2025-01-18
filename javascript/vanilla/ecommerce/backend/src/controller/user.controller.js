import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      email,
      name,
      password,
    });

    const createdUser = await user.save();

    if (!createdUser) {
      return res.status(500).json({ message: "Error creating user" });
    }
    return res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

export const signinUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({
      email,
      password,
    });

    if (!userExists) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.send({
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

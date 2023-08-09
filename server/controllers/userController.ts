import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, secretKey, apiKey } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    if (!secretKey || !apiKey) {
      return res
        .status(409)
        .json({ error: "Secret key and api key are required" });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    // Create token
    const token = jwt.sign(
      { user_id: newUser._id, username },
      process.env.JWT_SECRET!,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    newUser.token = token;
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    // Find the user by username and validate the password
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.JWT_SECRET!,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;
    const result = { token, username: user.username, id: user._id };
    res.status(200).json(result);
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

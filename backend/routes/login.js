import express from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// POST /api/auth/login
router.post(
  "/",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  async (req, res) => {
    console.log("🟢 Login route hit");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation failed:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // 🔹 Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        console.log("❌ User not found!");
        return res.status(400).json({ message: "User not found!" });
      }

      // 🔹 Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("❌ Invalid password!");
        return res.status(400).json({ message: "Invalid password!" });
      }

     // ✅ Generate JWT Token
     const secretKey = process.env.JWT_SECRET || "MySuperSecretKey123";
const token = jwt.sign(
  { id: user._id, email: user.email },
  process.env.JWT_SECRET || "MySuperSecretKey123",
  { expiresIn: "1h" }

);
// ✅ (Optional) Show Secret Key for Debugging Only
console.log("🧩 JWT-SECRET:", process.env.JWT_SECRET || "MySuperSecretKey123");

// 🟢 Log the user data clearly
console.log("✅ User:", {
  token,
  username: user.username,
  email: user.email,
  password: user.password,
  kitchenItems: user.kitchenItems,
  shoppingList: user.shoppingList,
});

      // 🔹 Send token + user info
      res.json({
        message: "Login successful!",
        token,
        user: {
          username: user.username,
          email: user.email,
          kitchenItems: user.kitchenItems,
          shoppingList: user.shoppingList,
        },
      });
    } catch (err) {
      console.error("❌ Login error:", err);
      res.status(500).json({ message: "Server error!" });
    }
  }
);

export default router;

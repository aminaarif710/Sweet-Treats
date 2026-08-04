// backend/routes/register.js
import express from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";

const router = express.Router();

// POST /api/auth/register
router.post(
  "/",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be 6+ chars"),
  ],
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({ message: "Email already registered!" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();
      res.status(201).json({ message: "Registered successfully!" });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ message: "Server error!" });
    }
  }
);

export default router;

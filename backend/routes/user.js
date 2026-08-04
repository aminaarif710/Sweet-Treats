// backend/routes/user.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET user by email
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      // Create empty user data for first-time login users
      const newUser = new User({
        username: req.params.email.split("@")[0],
        email: req.params.email,
        password: "placeholder", // placeholder only
        kitchenItems: [],
        shoppingList: [],
      });
      await newUser.save();
      return res.json(newUser);
    }
    res.json(user);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ message: "Server error!" });
  }
});

// PUT update user lists
router.put("/:email", async (req, res) => {
  try {
    const { kitchenItems, shoppingList } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      { kitchenItems, shoppingList },
      { new: true, upsert: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({ message: "Server error!" });
  }
});

// NEW: GET all users (to fetch IDs for deletion)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Get all users error:", err);
    res.status(500).json({ message: "Server error!" });
  }
});

// NEW: DELETE user by ID
router.delete("/delete-user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete user error:", err);
    res.status(500).json({ message: "Server error!" });
  }
});

export default router;

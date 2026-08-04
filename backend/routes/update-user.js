import express from "express";
import User from "../models/User.js";

const router = express.Router();

// UPDATE USER BY EMAIL
router.put("/:emailToUpdate", async (req, res) => {
  let success = false;

  try {
    const reqEmail = req.params.emailToUpdate;

    const existingUser = await User.findOne({ email: reqEmail });

    if (!existingUser) {
      return res
        .status(404)
        .json({ success, message: "No user exists with this email." });
    }

    const { username, kitchenItems, shoppingList } = req.body;

    let newData = {};
    if (username) newData.username = username;
    if (kitchenItems) newData.kitchenItems = kitchenItems;
    if (shoppingList) newData.shoppingList = shoppingList;

    const updatedUser = await User.findOneAndUpdate(
      { email: reqEmail },
      { $set: newData },
      { new: true }
    );

    success = true;
    res.json({ success, updatedUser });
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({ success, message: "Internal Server Error!" });
  }
});

export default router;

import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// ✅ Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get recipes by category
router.get("/category/:category", async (req, res) => {
  try {
    const recipes = await Recipe.find({ category: req.params.category });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get single recipe (by ID or name)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let recipe = null;

    // Try by ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      recipe = await Recipe.findById(id);
    }

    // Try by name (slug or spaced)
    if (!recipe) {
      recipe = await Recipe.findOne({
        name: { $regex: new RegExp(id.replace(/-/g, " "), "i") },
      });
    }

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

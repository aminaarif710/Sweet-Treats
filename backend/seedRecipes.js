// backend/seedRecipes.js
import mongoose from "mongoose";
import Recipe from "./models/Recipe.js";
import { recipes } from "./data/recipes.js"; // adjust path

const allRecipes = Object.entries(recipes).flatMap(([category, list]) =>
  list.map(recipe => ({ ...recipe, category }))
);

mongoose.connect("mongodb://127.0.0.1:27017/sweet-treats")
  .then(async () => {
    console.log("Connected to MongoDB");
    await Recipe.deleteMany({}); // optional: clear existing
    await Recipe.insertMany(allRecipes);
    console.log("Recipes inserted successfully!");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));

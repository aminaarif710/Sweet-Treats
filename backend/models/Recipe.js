import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  steps: [String]
});

export default mongoose.model("Recipe", recipeSchema);

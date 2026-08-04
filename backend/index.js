// backend/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import userRoute from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import recipeRoutes from "./routes/recipes.js";
import deleteUserRoute from "./routes/delete-user.js";
import updateUserRoute from "./routes/update-user.js";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/sweet-treats")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Use routes
app.use("/api/auth/register", registerRoute);
app.use("/api/auth/login", loginRoute);
app.use("/api/user", userRoute);
app.use("/api", contactRoutes);
app.use("/api/recipes",recipeRoutes);
// DELETE USER ROUTE
app.use("/api/delete-user", deleteUserRoute);
app.use("/api/update-user", updateUserRoute);
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

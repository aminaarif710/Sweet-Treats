// backend/routes/contact.js
import express from "express";
import { body, validationResult } from "express-validator";
import mongoose from "mongoose";

const router = express.Router();

// Define contact schema inline
const contactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// Create a contact
router.post(
  "/contact",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("mobile").notEmpty().withMessage("Mobile required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("message").notEmpty().withMessage("Message required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });

    try {
      const { name, mobile, email, message } = req.body;
      const newContact = new Contact({ name, mobile, email, message });
      await newContact.save();

      res.status(201).json({ message: "Message received successfully!" });
    } catch (err) {
      console.error("Contact save error:", err);
      res.status(500).json({ message: "Error saving contact" });
    }
  }
);

// Get all contacts
router.get("/contact", async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error("Contact fetch error:", err);
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

// Get one contact
router.get("/contact/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (err) {
    console.error("Contact detail error:", err);
    res.status(500).json({ message: "Error fetching contact" });
  }
});

// Delete contact
router.delete("/contact/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Contact delete error:", err);
    res.status(500).json({ message: "Error deleting contact" });
  }
});

export default router;

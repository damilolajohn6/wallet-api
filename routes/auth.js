const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, password, email, full_name, date_of_birth, address, phone_number } = req.body;
    const user = new User({
      username,
      password,
      email,
      full_name,
      date_of_birth,
      address,
      phone_number,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      throw new Error("Invalid login credentials");
    }
    const token = jwt.sign({ userId: user._id }, "JWT_SECRET");
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;

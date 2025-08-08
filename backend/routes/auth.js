const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../model/UserModel");

const router = express.Router();

// Signup Route

router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existing = await UserModel.findOne({ email });
    if (existing) return res.status(400).send("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ email, username, password: hashedPassword });

    await user.save();

    res.status(201).send("Signup success");
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).send("Server error. Please try again.");
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).send("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/UserModel");

const router = express.Router();

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Signup route
router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user: { username: existingUser.username, email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// JWT Middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Authorization token required" });
  }
}

// ✅ Example protected route (optional)
router.get("/profile", authenticateJWT, (req, res) => {
  res.json({ message: "You are authenticated!", userId: req.user.userId });
});

module.exports = router;
module.exports.authenticateJWT = authenticateJWT;

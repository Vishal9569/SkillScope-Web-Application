const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel/user");
const { registerSchema, loginSchema } = require("../validators/userValidator");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();


router.use(cors({
  origin:'https://skill-scope-web-application.vercel.app',
  credentials: true,
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/register", async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const { name, email, password } = value;
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) return res.status(400).json({ error: "User already exists" });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email: normalizedEmail, password: hashedPassword });

    res.status(201).json({ message: "User created", userId: newUser._id });
  } catch (err) {
    console.error(" Registration error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = value;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        role: user.role || "user",
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error(" Login error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;

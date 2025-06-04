const jwt = require("jsonwebtoken");
const User = require("../models/userModel/user");

const JWT = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied. No token." });

  try {
    const decoded = jwt.verify(token, JWT);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token." });
  }
};

const requireAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.userId);
  if (!user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required." });
  }
  next();
};

module.exports = { verifyToken, requireAdmin };

// scripts/initAdmin.js
const User = require("../models/userModel/user");
const bcrypt = require("bcrypt");

async function createAdminUser() {
  const adminEmail = "vk965431@gmail.com.com";
  const existing = await User.findOne({ email: adminEmail });

  if (!existing) {
    const password = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Admin",
      email: adminEmail,
      password :"Vishal@_1234",
      role: "admin",
    });
    console.log("✅ Admin created");
  }
}

module.exports = createAdminUser;

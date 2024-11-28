// controllers/authController.js
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, email: user.email, msg: "Login Successfully!"});
    console.log('logedin')
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = { register, login };

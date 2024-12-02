// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;
    const user = new User({ username, phone, email, password });
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

    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email, 
        isAdmin: user.isAdmin 
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    await User.updateOne({ _id: user._id }, { $set: { refreshToken: token } });
    res.json({ token, id: user._id, msg: "Login Successfully!" });
    console.log("logedin");
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// To send user data - user logic 

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json(userData);
  } catch (error) {
    console.log('Error from the user route', error)
  }
}

module.exports = { register, login, user };

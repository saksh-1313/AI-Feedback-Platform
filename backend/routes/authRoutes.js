const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  getProfile,
} = require("../controllers/authController");

const auth = require("../middleware/auth");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get All Users
router.get("/users", auth, getUsers);

// Get Logged-in User Profile
router.get("/profile", auth, getProfile);

module.exports = router;
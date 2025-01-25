const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { signup, login, getUser } = require("../controllers/authController");

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);

module.exports = router;

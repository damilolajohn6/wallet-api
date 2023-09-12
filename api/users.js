const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Define routes for user operations (e.g., registration, login)
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

// (Register a user) - POST /api/auth/register
router.post("/register", authController.registerUserController)

// (Login a user) - POST /api/auth/login
router.post("/login", authController.loginUserController);


module.exports = router
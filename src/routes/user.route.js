const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

//(Register a user) - POST /api/auth/register
router.post("/register", authController.registerUserController)


module.exports = router
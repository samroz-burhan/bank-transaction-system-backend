const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const accountController = require("../controller/account.controller");

const router = express.Router();


router.post(
  "/accounts",
  authMiddleware.authMiddleware,
  accountController.createAccountController,
);

module.exports = router;

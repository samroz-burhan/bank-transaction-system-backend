const express = require("express");
const authRouter = require("./routes/user.route");

const app = express();

app.use(express.json());

authRouter.use("/api/auth", authRouter);

module.exports = app;
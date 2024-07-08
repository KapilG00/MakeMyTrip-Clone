const express = require("express");
const { authCheck } = require("../controllers/user.controller.js");
const authenticateToken = require("../middlewares/authenticationMiddleware.js");

const userRouter = express.Router();

userRouter.post("/authCheck", authenticateToken, authCheck);

module.exports = userRouter;

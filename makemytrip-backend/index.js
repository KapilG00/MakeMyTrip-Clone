const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./src/routes/auth.route.js");
const userRouter = require("./src/routes/user.route.js");
// import listingRouter from "./routes/listing.route.js";
// import cookieParser from "cookie-parser";
// import path from "path";
// import authRouter from "./src/routes/auth.route.js";
const cors = require("cors");

const server = express();
const port = 8001;
server.use(cors());
server.use(express.json());
dotenv.config();

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB IS CONNECTED");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error in connection to DB");
  });

// server.get("/", (req, res) => {
//   console.log("Welcome to Express server!!");
//   res.send("Welcome!!");
// });

server.listen(port, () => {
  console.log("Express is running on port:", port);
});

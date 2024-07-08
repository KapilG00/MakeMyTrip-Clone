const mongoose = require("mongoose");
// import userRoles from "../utils/enums.js";
// import { USER_CREATION_VARIABLE } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 10,
    },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: [true, "Email should be unique"],
    },
    contact: { type: Number, minLength: 10, maxLength: 10 },
    userType: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

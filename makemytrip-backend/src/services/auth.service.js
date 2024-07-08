const User = require("../models/User.model.js");
const bcrypt = require("bcryptjs");
const {
  generateJWTAccessToken,
  generateJWTRefreshToken,
} = require("../utils/createJwtToken.js");
const { CustomException } = require("../utils/customExceptions.js");

async function registerUserService(data) {
  try {
    const { username, password, email, contact } = data;
    const user = await User.findOne({ email });
    if (user) {
      throw new CustomException(409, "User already exists!!");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userObject = new User({
      username: username,
      password: hashedPassword,
      email: email,
      contact: contact,
      userType: "user",
    });

    await userObject.save();

    return {
      success: true,
      status: 201,
      message: "User registered successfully!!",
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

async function loginService(data) {
  const { email, password, userType } = data;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      throw new CustomException(404, "User not found!!");
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      throw new CustomException(401, "Unauthorized: Wrong password!!");
    }
    if (userType !== validUser.userType) {
      throw new CustomException(401, "Unauthorized: Invalid user!!");
    }
    const accessToken = generateJWTAccessToken(email);
    const refreshToken = generateJWTRefreshToken(email);
    const { password: pass, ...rest } = validUser._doc;
    return {
      success: true,
      status: 200,
      message: "User logged in successfully!!",
      userData: {
        id: rest._id,
        username: rest.username,
        email: rest.email,
      },
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

module.exports = { registerUserService, loginService };

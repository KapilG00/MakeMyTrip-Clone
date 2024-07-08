// const authenticateToken = require("../middlewares/authenticationMiddleware");

exports.authCheck = async (req, res, next) => {
  try {
    console.log("User authenticated successfully!!");
    res.send("DONE!!");
  } catch (error) {
    next(error);
  }
};

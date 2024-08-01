const asyncHandler = require("express-async-handler");
const userService = require("../services/users.services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @description User Register
 * @route POST /users/register
 * @access public
 */

const userRegistration = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  const userAvailable = await userService.findOne(email);
  console.log(userAvailable, "62323");
  if (!userAvailable) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(req.body, hashedPassword);
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "user already exist" });
  }
});

/**
 * @description User Login
 * @route POST /users/login
 * @access public
 */

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findOne(email);
  if (user && (await bcrypt.compare(password, user.password))) {

    const payload = { username: user.username, email: user.email, id: user.id };

    const accessToken = jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "30m",
    });

    // setting the cookie
    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 15 * 60 * 1000,
    }); //15 min
    res.status(200).json(accessToken);
  } else {
    res.status(404).json({ message: "user not found or incorrect password" });
  }
});

/**
 * @description logout User
 * @route POST /users/logout
 * @access private
 */

const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("token").json({message : "cokkie deleted successfully"});
});

module.exports = { userRegistration, userLogin, userLogout };

const asyncHandler = require("express-async-handler");
const userService = require("../services/users.services");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

/**
 * @description User Register
 * @route POST /users/register
 * @access public
 */

const userRegistration = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  const userAvailable = await userService.findOne(email);
  console.log(userAvailable , '62323');
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
    const {email , password} = req.body
    const user = await userService.findOne(email)
    if(user && (await bcrypt.compare(password , user.password))){
        
        res.status(200).json(user);
    }
});

/**
 * @description logout User
 * @route POST /users/logout
 * @access private
 */

const userLogout = asyncHandler(async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  res.status(200).json(user);
});

module.exports = { userRegistration, userLogin, userLogout };

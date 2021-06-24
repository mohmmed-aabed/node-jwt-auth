const User = require('../models/User');
const handleError = require('../errors/handleError');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// ------------------------------------------------------
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
};

const getSignup = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
};

const getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};

// ------------------------------------------------------
module.exports = {
  getHomePage,
  signup,
  login,
  getSignup,
  getLogin,
};

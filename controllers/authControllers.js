const User = require('../models/User');
const handleError = require('../errors/handleError');
const path = require('path');

// ------------------------------------------------------
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};

const login = (req, res) => {
  res.json(req.body);
};

const getSignup = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
};

const getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
};

const setCookies = (req, res) => {
  res.cookie('newUser', false, {
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.send('You got the cookies');
};

const getCookies = (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
};

// ------------------------------------------------------
module.exports = {
  signup,
  login,
  getSignup,
  getLogin,
  setCookies,
  getCookies,
};

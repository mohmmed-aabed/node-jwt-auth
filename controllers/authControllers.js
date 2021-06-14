const User = require('../models/User');
const handleError = require('../errors/handleError');

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

// ------------------------------------------------------
module.exports = {
  signup,
  login,
};

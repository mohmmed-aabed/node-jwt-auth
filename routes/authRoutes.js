const express = require('express');
const router = express.Router();

const {
  getHomePage,
  getSignup,
  getLogin,
  signup,
  login,
} = require('../controllers/authControllers');

// ------------------------------------------------------
router.get('/', getHomePage);
router.get('/signup', getSignup);
router.get('/login', getLogin);
router.post('/signup', signup);
router.post('/login', login);

// ------------------------------------------------------
module.exports = router;

const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  getSignup,
  getLogin,
  setCookies,
  getCookies,
} = require('../controllers/authControllers');

// ------------------------------------------------------
router.get('/signup', getSignup);
router.get('/login', getLogin);
router.post('/signup', signup);
router.post('/login', login);
router.get('/set-cookies', setCookies);
router.get('/get-cookies', getCookies);

// ------------------------------------------------------
module.exports = router;

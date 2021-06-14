const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email!'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [isEmail, 'Please enter a valid email!'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password!'],
    minLength: [6, 'Minimum password length is 6 characters!'],
  },
});

// fire a function before doc saved to db
userSchema.pre('save', function (next) {
  console.log(this);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

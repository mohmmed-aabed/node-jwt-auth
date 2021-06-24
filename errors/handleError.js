const handleError = (err) => {
  const errors = { email: '', password: '' };
  // Incorrect email
  if (err.message === 'Incorrect email') {
    errors.email = 'Incorrect email';
  }

  // Incorrect password
  if (err.message === 'Incorrect password') {
    errors.password = 'Incorrect password';
  }

  // validattion errors
  if (err.message && err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  // duplicate key error
  if (err.code === 11000) {
    errors.email = 'This email is already registered!';
  }
  return errors;
};

module.exports = handleError;

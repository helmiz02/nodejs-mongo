var validator = require("email-validator");

const validateEmail = (email) => {
  let result = validator.validate(email);
  return result;
};

module.exports = { validateEmail };

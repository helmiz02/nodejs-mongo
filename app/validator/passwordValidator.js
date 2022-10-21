var passwordValidator = require("password-validator");

// Create a schema
var validatePasswordSchema = new passwordValidator();

// Add properties to it
validatePasswordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(16) // Maximum length 100
  .has()
  .uppercase(1) // Must have at least one uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(); // Must have digits

const validatePassword = (pass) => {
  // result with all details
  //   let result = validatePasswordSchema.validate(pass, { details: true });
  let result = validatePasswordSchema.validate(pass);
  return result;
};

module.exports = { validatePassword };

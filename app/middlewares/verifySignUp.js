const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const { validatePassword } = require("../validator/passwordValidator");
const { validateEmail } = require("../validator/emailValidator");

checkValidEmail = (req, res, next) => {
  if (validateEmail(req.body.email)) next();
  else {
    res.status(400).send({ message: "email not valid!" });
    return;
  }
};

checkStrengthPassword = (req, res, next) => {
  if (validatePassword(req.body.password)) next();
  else {
    res.status(400).send({ message: "password not strength enough!" });
    return;
  }
};

checkDuplicateEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkValidEmail,
  checkDuplicateEmail,
  checkStrengthPassword,
  checkRolesExisted,
};

module.exports = verifySignUp;

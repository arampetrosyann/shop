const jwt = require("jsonwebtoken");
const env = require("../config/env.config");

const createToken = function (obj) {
  return jwt.sign(obj, env.SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};

module.exports = createToken;

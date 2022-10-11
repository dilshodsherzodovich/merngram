const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const User = require("../models/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ err: "You must log in first" });
  }

  const token = authorization.replace("dilshod ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ err: "You must log in first" });
    }

    const { _id } = payload;
    User.findOne({ _id }).then((savedUser) => {
      if (!savedUser) {
        return res.status(401).json({ err: "You must log in first" });
      }
      req.user = savedUser;
      next();
    });
  });
};

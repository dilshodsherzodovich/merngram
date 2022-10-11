const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys/index");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({
      err: "Please fill all the blanks",
    });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ err: "This email is already exists" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      const user = new User({ name, email, password: hash });
      user
        .save()
        .then((user) => {
          res.json({ msg: "Added successfully" });
        })
        .catch((err) => console.log(err));
    });
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ err: "Please fill all the blanks" });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(422).json({
          err: "This email is not find, please try again with another email",
        });
      }
      bcrypt.compare(password, user.password).then((isSame) => {
        if (isSame) {
          user.password = undefined;
          const token = jwt.sign({ _id: user._id }, JWT_SECRET);
          res.json({ token, user });
          // res.json({ msg: "SuccessFully signed in, redirecting" });
        } else {
          return res.status(422).json({ err: "Invalid password" });
        }
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;

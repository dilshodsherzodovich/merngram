const { Router } = require("express");
const router = Router();
const login = require("../middleware/login");
const Post = require("../models/post");

router.get("/allposts", login, (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((data) => {
      res.json({ posts: data });
    })
    .catch((err) => console.log(err));
});

router.get("/myposts", login, (req, res) => {
  console.log(req.user);
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((myposts) => {
      res.json({ myposts });
    });
});

router.post("/createpost", login, (req, res) => {
  const { title, body, media } = req.body;
  if (!title || !body || !media) {
    return res.status(422).json({ err: "Fill all the blanks,please" });
  }
  req.user.password = undefined;

  const newPost = new Post({
    title,
    body,
    media,
    postedBy: req.user,
  });
  newPost
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;

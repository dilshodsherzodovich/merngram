const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  media: {
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  postedTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Post", postSchema);

const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: String,
    reaction: String,
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Comment;

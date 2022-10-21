const db = require("../models");
const CommentModel = db.comment;

exports.createComment = async (Comment) => {
  return await CommentModel.create(Comment);
};
exports.getAllComments = async () => {
  return await CommentModel.find().populate("author").populate("postId");
};
exports.getCommentById = async (id) => {
  return await CommentModel.findById(id).populate("author").populate("postId");
};

exports.updateComment = async (id, Comment) => {
  return await CommentModel.findByIdAndUpdate(id, Comment).populate("author").populate("postId");
};

exports.deleteComment = async (id) => {
  return await CommentModel.findByIdAndDelete(id).populate("author").populate("postId");
};

const db = require("../models");
const PostModel = db.post;

exports.createPost = async (Post) => {
  return await PostModel.create(Post);
};
exports.getAllPosts = async () => {
  return await PostModel.find();
};
exports.getPostById = async (id) => {
  return await PostModel.findById(id);
};

exports.updatePost = async (id, Post) => {
  return await PostModel.findByIdAndUpdate(id, Post);
};

exports.deletePost = async (id) => {
  return await PostModel.findByIdAndDelete(id);
};

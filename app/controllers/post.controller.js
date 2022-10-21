const PostService = require("../services/post.service");

exports.createPost = async (req, res) => {
  try {
    const Post = await PostService.createPost(req.body);
    res.json({ data: Post, status: "success", message: "Post was registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const Posts = await PostService.getAllPosts();
    res.json({ data: Posts, status: "success", message: "get all Posts successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const Post = await PostService.getPostById(req.params.id);
    res.json({ data: Post, status: "success", message: "get one Post successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  console.log(req.body);
  try {
    const Postupdated = await PostService.updatePost(req.params.id, req.body);
    res.json({ data: Postupdated, status: "success", message: "Post was updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const Post = await PostService.deletePost(req.params.id);
    res.json({ data: Post, status: "success", message: "Post was deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

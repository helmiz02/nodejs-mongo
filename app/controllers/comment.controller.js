const CommentService = require("../services/comment.service");

exports.createComment = async (req, res) => {
  try {
    const Comment = await CommentService.createComment(req.body);
    res.json({ data: Comment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const Comments = await CommentService.getAllComments();
    res.json({ data: Comments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const Comment = await CommentService.getCommentById(req.params.id);
    res.json({ data: Comment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const Comment = await CommentService.updateComment(req.params.id, req.body);
    res.json({ data: Comment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const Comment = await CommentService.deleteComment(req.params.id);
    res.json({ data: Comment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

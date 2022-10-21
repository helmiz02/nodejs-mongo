const controller = require("../controllers/comment.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/comment/", [authJwt.verifyToken], controller.createComment);
  app.get("/api/comment/", [authJwt.verifyToken], controller.getAllComments);
  app.get("/api/comment/:id", [authJwt.verifyToken], controller.getCommentById);
  app.put("/api/comment/:id", [authJwt.verifyToken], controller.updateComment);
  app.delete("/api/comment/:id", [authJwt.verifyToken], controller.deleteComment);
};

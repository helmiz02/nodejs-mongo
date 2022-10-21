const controller = require("../controllers/post.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/post/", [authJwt.verifyToken], controller.createPost);
  app.get("/api/post/", [authJwt.verifyToken], controller.getAllPosts);
  app.get("/api/post/:id", [authJwt.verifyToken], controller.getPostById);
  app.put("/api/post/:id", [authJwt.verifyToken], controller.updatePost);
  app.delete("/api/post/:id", [authJwt.verifyToken], controller.deletePost);
};

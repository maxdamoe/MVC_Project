const router = require("express").Router();

const userRoutes = require("./users_routes.js");
const commentRoutes = require("./comment_routes");
const postRoutes = require("./posts_routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
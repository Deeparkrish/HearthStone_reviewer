// By Deepa
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Card, Comment, Favorite } = require("../../models");

const userRoutes = require("./user-routes");
const cardRoutes = require("./card-routes");
const commentRoutes = require("./comment-routes");
// const favRoutes = require("./favorite-routes");
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User } = require("../../models");

const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
const cardRoutes = require("./card-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/cards", cardRoutes);

router.use("/users", userRoutes);
router.use("/cards", cardRoutes);
router.use("/comments", commentRoutes);
// router.use('/comments',favRoutes);

module.exports = router;

const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User } = require("../../models");

const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
const cardRoutes = require("./card-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/cards", cardRoutes);

module.exports = router;

const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Comment } = require('../../models');

const userRoutes = require('./user-routes.js');
//const commentRoutes = require('./comment-routes');



router.use('/users',userRoutes);
// router.use('/comments',commentRoutes);

module.exports = router;
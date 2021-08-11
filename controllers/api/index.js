const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');



router.use('/users',userRoutes);
router.use('/comments',commentRoutes);

module.exports = router;
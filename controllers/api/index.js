const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Comment } = require('../../models');

// router.use('/users',userRoutes);
// router.use('/comments',commentRoutes);

module.exports = router;
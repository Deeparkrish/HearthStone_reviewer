const sequelize = require('../config/connection');
const { Favorite, User, Card  } = require('../models');

const favdata = [
    {
        user_id:1,
        card_id:1
    },
    {
        user_id:1,
        card_id :2
    },
    {
        user_id:2,
        card_id :3
    },
    {
        user_id:3,
        card_id :1
    },
    {
        user_id:4,
        card_id:4
    }
];
const seedFavorites = () => Favorite.bulkCreate(favdata);

module.exports = seedFavorites;
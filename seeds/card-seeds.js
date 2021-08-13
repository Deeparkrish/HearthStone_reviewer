const sequelize = require('../config/connection');
const { Card } = require('../models');

const carddata = [
    {
        user_id:1,
        api_id:1
    },
    {
        user_id:1,
        api_id :2
    },
    {
        user_id:2,
        api_id :3
    },
    {
        user_id:3,
        api_id :1
    },
    {
        user_id:4,
        api_id:4
    }
];
const seedCards = () => Card.bulkCreate(carddata);

module.exports = seedCards;
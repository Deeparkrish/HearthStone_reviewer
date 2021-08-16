const sequelize = require("../config/connection");
const { Card } = require("../models");

const carddata = [
  {
    user_id: 1,
    api_id: "HERO_02mbp",
  },
  {
    user_id: 1,
    api_id: "CS2_188o",
  },
  {
    user_id: 2,
    api_id: "EX1_014te",
  },
  {
    user_id: 3,
    api_id: "EX1_604o",
  },
  {
    user_id: 4,
    api_id: "EX1_549o",
  },
];
const seedCards = () => Card.bulkCreate(carddata);

module.exports = seedCards;

const sequelize = require("../config/connection");
const { Card } = require("../models");

const cardData = [
  {
    user_id: 1,
    api_id: "HERO_02mbp",
    card_img:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cf014c0c9363f70cb7e4f7f7c4086ab42bc5d2afecf421f35b9c87c81943d9d4.png",
    card_name: "Leeroy Jenkins",
  },
  {
    user_id: 1,
    api_id: "VAN_EX1_116",
    card_img:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e3a97bcb37b12fbe0845471ca0b3dc7deef2317f27544f55acccfd1a672ad1fd.png",
    card_name: "Tank Up!",
  },
  {
    user_id: 2,
    api_id: "CFM_648t",
    card_img:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f8b2f6eef5466fb1fb0bed9cc06c667e032df2b847bc6b72fb1e3bca28b4c939.png",
    card_name: "Little Friend",
  },
  {
    user_id: 3,
    api_id: "TRL_305",
    card_img:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1a76dd7384eb97550f52418c72a8aea5c9ce5a780826f417e006d17db7228fb8.png",
    card_name: "A New Challenger",
  },
  {
    user_id: 4,
    api_id: "TB_BaconShop_HP_041",
    card_img:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/174b35548dcfed8a083d6a29f59b33d44d8c9661735affdfec5cac09b87a7b5a.png",
    card_name: "A Tale of Kings",
  },
];
const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;

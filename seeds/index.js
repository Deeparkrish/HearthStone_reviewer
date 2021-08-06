const sequelize = require("./config/connection");
const db = require("../models");

sequelize.sync({ force: false }).then(() => {
  const user = {
    username: "testUser1",
    email: "test@test.com",
    password: "password",
  };
  const user1 = {
    username: "testUser2",
    email: "test2@test.com",
    password: "password2",
  };
  db.User.bulkCreate([user, user1]);
  const card = {
    api_id: "EX1_116",
  };
  const card = {
    api_id: "HERO_02mbp",
  };
  db.Card.bulkCreate([card, card1]);

  const userComment = {
    comment: "testComment1",
    card_id: 1, //test
  };
  const userComment1 = {
    comment: "test comment 2",
    card_id: 2,
  };
  db.Comment.bulkCreate([userComment, userComment1]);
});

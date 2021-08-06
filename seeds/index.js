const sequelize = require("./config/connection");
const db = require("../models");

sequelize.sync({ force: false }).then(() => {
  const user = {
    username: "testUser1",
    email: "test@test.com",
    password: "password",
  };
  db.User.create(user);
  const card = {
    apiId: "EX1_116",
  };
  db.Card.create(card);

  const userComment = {
    comment: "testComment1",
    cardId: 1, //test
  };
  db.Comment.create(userComment);
});

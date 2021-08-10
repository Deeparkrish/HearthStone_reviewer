<<<<<<< HEAD
const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----*****Database synced*******------');
  await seedUsers();
  console.log('----******User seeded*****----------');
  process.exit(0);

};

seedAll();

=======
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
>>>>>>> 7216d39e56e60a69e8b009819be48f97b51e6f30

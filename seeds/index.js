const sequelize = require("./config/connection");
const db = require("../models");

sequelize.sync({ force: false }).then(() => {
  const user = {
    username: "testUser1",
    email: "test@test.com",
    password: "password",
  };
  db.User.create(user);
});

const sequelize = require("./config/connection");
const db = require("../models");

sequelize.sync({ force: false }).then(() => {
  //
});

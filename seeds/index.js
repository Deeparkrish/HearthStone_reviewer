const sequelize = require("../config/connection");

const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----*****Database synced*******------");
  await seedUsers();
  console.log("----******User seeded*****----------");
  process.exit(0);
};

seedAll();

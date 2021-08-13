// Seeding done by Deepa 
const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedCards = require("./card-seeds");
const seedComments = require("./comment-seeds");
const seedFavorites = require("./favorite-seeds");



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----*****Database synced*******------");
  await seedUsers();
  console.log("----******User seeded*****----------");
  await seedCards();
  console.log("----******Card seeded*****----------");
  await seedComments();
  console.log("----******Comment seeded*****----------");
  //add fav
  await seedFavorites();
  console.log("----******Favorite seeded*****----------");
  process.exit(0);
};

seedAll();

//add Dependencies 
const Sequelize = require('sequelize');   // sequelize ORM 
require('dotenv').config(); // require and configure dotenv.

let sequelize;
//process.env  has the keys and values you defined in your .env file.
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
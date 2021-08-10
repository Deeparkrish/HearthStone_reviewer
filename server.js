//  Add dependecnies required 
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// sets up an Express.js session and connecti it sequelize db
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express(); // instance 
const PORT = process.env.PORT || 3001; // assign port number

app.use(express.json());
//  It takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object. The extended: true option set inside the method 
// call informs our server that there may be sub-array data nested in it as well
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// handlebar - template engine 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// turn on routes
app.use(routes);
app.use(session(sess)); // session 

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
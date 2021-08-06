// Import all models
const Cards = require('./Cards');
const Comment = require('./Comment');
const User = require('./User');

// Create Associations 
Comment.oneToMany(ForeignKeyToCard);

Cards.hasOne(Comment);

User.




module.exports = { User };

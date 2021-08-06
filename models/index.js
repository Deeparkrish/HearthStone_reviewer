// Import all models
const Card = require("./Card");
const Comment = require("./Comment");
const User = require("./User");
const Favorite = require("./Favorite");

// Create Associations
Comment.belongsTo(Card);
Card.hasMany(Comment);
Favorite.belongsToMany(User); //this creates a manyToMany relationship
Favorite.belongsToMany(Card);

module.exports = { User, Comment, Card, Favorite };

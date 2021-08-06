// Import all models
const Card = require("./Card");
const Comment = require("./Comment");
const User = require("./User");

// Create Associations
Comment.belongsTo(Card);
Card.hasMany(Comment);
//need to create favorites table and then create association

module.exports = { User, Comment, Card };

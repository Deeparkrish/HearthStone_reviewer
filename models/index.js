// Import all models
const Card = require("./Card");
const Comment = require("./Comment");
const User = require("./User");
const Favorite = require("./Favorite");

// Create Associations
Comment.belongsTo(Card, {
  foreignKey: "card_id",
  onDelete: "SET NULL",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Card.hasMany(Comment, {
  foreignKey: "card",
  onDelete: "SET NULL",
});
Favorite.belongsToMany(User); //this creates a manyToMany relationship
Favorite.belongsToMany(Card);
User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Card, Favorite };

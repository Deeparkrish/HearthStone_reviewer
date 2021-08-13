// Import all models - Created by Dyravuth yorn 
const Card = require("./Card");
const Comment = require("./Comment");
const User = require("./User");
const Favorite = require("./Favorite");
const { hasMany } = require("./Card");

// Create Associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});
User.hasMany(Card, {
  foreignKey: "user_id",
});
User.hasMany(Favorite);
Comment.belongsTo(Card, {
  foreignKey: "card_id",
  onDelete: "SET NULL",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Card.hasMany(Comment, {
  foreignKey: "card_id",
  onDelete: "SET NULL",
});
Card.belongsToMany(User, {
  through: Card,
  foreignKey: "card_id",
});
Favorite.belongsTo(User, {
  through: Favorite,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Favorite.belongsTo(Card, {
  through: Favorite,
  foreignKey: "card_id",
  onDelete: "CASCADE",
});

module.exports = { User, Comment, Card, Favorite };

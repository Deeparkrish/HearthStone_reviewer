// Import all models
const Card = require("./Card");
const Comment = require("./Comment");
const User = require("./User");
const Favorite = require("./Favorite");

// Create Associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});
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
// // Card.belongsToMany(User, {
// //   foreignKey: "user_id",
// // });
// Favorite.belongsToMany(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });
// Favorite.belongsToMany(Card, {
//   foreignKey: "card_id",
//   onDelete: "CASCADE",
// });

module.exports = { User, Comment, Card, Favorite };

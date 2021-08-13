// Created by -Deepa , Jessica and Dyravuth 
// Install dependencies 
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// Instantiate model class 
class Comment extends Model {}

Comment.init( // column definitions 
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // the comment text to provided by the user 
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    // The user who posts the comment 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // the card the comment belongs to 
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "card",
        key: "id",
      },
    },
  },

  {
    // table Definitions 
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: true,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "comment",
  }
);

module.exports = Comment;

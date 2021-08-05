const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: "card",
                key: "id"
            }
        },
    },

{
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'comment'
    }
);

module.exports = Comments;
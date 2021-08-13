const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
    {
        
        comment_text: "Awesome job!",
        user_id:1,
        card_id:1
    },
    {
        comment_text: "Way to go!",
        user_id:3,
        card_id:1
    },
    {
        comment_text: "Appreciate all the hardwork",
        user_id:2,
        card_id:1
    },
    {
        comment_text: "Congratulations on your acheivement!",
        user_id:2,
        card_id:1
    },
    {
        comment_text: "This is great to know!",
        user_id:3,
        card_id:2
    },
    {
        comment_text: "Most awaiting feature",
        user_id:4,
        card_id:1
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
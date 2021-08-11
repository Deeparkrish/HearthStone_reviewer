const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 3,
        comment_text: "I love this card!"
    },
    {
        user_id: 6,
        post_id: 5,
        comment_text: "This card helped me win!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This was a clutch card to help me to victory."
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "This card was pretty pointless."
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "I love playing this card!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Don't get the hype with this card."
    },
    {
        user_id: 6,
        post_id: 2,
        comment_text: "Awesome card!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "This card is okay, there's definitely better ones."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
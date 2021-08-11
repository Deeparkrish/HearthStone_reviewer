const sequelize = require('../../config/connection');
const router = require('express').Router();

const { User, Card, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments 
router.get('/', (req, res) => {
    Comment.findAll({
        order: [['createdAt', 'DESC']],
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'createdAt',
      'updatedAt'
    ],
    include: [
      // include the Comment model here:
      {
        model: Card,
        attributes: ['id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
      }
    )
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//Create a comment 
router.post('/',withAuth, (req, res) => {
  // check if  user is logged in 
  if (req.session) {
  Comment.create({
        comment_text: req.body.comment_text,
        // get user id for the session 
        user_id: req.session.user_id,
        card_id: req.body.card_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
  }
});

//get Comment by id 
router.get('/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'comment_text','user_id ','createdAt'],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Card,
          attributes: ['id','api_id']
        }
      ]

    })
    .then(dbCommentData => {
      if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
    .catch(err => {
      console.log(err);
        res.status(500).json(err);
      });
      
});

router.delete('/:id',withAuth, (req, res) => {
  if (req.session) {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCommentData => {
      if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
    .catch(err => {
      console.log(err);
        res.status(500).json(err);
      });
  }    
});

module.exports = router;
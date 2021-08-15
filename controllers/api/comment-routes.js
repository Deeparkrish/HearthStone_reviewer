// import dependences 
const sequelize = require('../../config/connection'); // connection  to db 
const router = require('express').Router();  

const { User, Card, Comment } = require('../../models'); // Import the models needed 
const withAuth = require('../../utils/auth'); // import the authnetication function 

//created and tested on insomnia - by Deepa Krishnan 
// Get all comments - based on most recent one  
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
      // include the Card details here:
      {
        model: Card,
        attributes: ['id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },//User how made te comment 
      {
        model :User,
        attributes :['username']
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

//Add a comment 
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

//get Comment by id  and  the card associated with comments and user who posted it 
router.get('/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'comment_text','user_id','createdAt'],
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

// Update a comment text
router.put('/:id',withAuth,(req, res) => {
  Comment.update(
    {
      comment_text: req.body.comment_text,
 
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'Not found!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
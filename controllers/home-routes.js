<<<<<<< HEAD
// getting the data for front end -  coding :Deepa 
//dependencies   
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Card, User, Comment,Favorite } = require('../models');

// Home Page - Get all Cards  associated with user along with comments 
 // to be filled - by Dyravuth yorn 
=======
//dependcies
const router = require("express").Router();
const sequelize = require("../config/connection");
const axios = require("axios");
const { Card, User, Comment } = require("../models");
>>>>>>> feature/cards

// Home Page - Get all Cards  associated with user along with comments

//Get comments
router.get("/", (req, res) => {
  // Get all Comments
  Comment.findAll({
    attributes: ["id", "comment_text", "createdAt"],
    // Include card details
    include: [
      {
        model: Card,
        attributes: ["id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      // User who made comment
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCommentData) => {
      // Upon success, get the comments and render it on homepage
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      console.log(comments);
      res.render("homepage", {
        comments,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get comments
router.get('/', (req, res) => {
// Get all Comments 
Comment.findAll({
  attributes: [
    'id',
    'comment_text',
    'user_id'
  ],
  // Include card details
  include: [
    {
      model: Card,
      attributes: ['id'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    // User who made comment  
    {
      model: User,
      attributes: ['username']
    }
  ]
})
.then(dbCommentData =>{
    // Upon success,Get the comments  and render it on homepage 
    const comments = dbCommentData.map(comment => comment.get({ plain: true }));
    res.render('homepage', {
        comments,
        loggedIn: req.session.loggedIn
      });
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

//Render a single comment  Page
router.get('/comments/:id', (req, res) => {
        attributes: ["api_id"],
      },
      // User who made comment
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCommentData) => {
      // Upon success,Get the comments  and render it on homepage
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      Promise.all(
        comments.map(async (comment) => {
          comment.card.data = await new Promise((resolve, reject) => {
            axios
              .get(
                "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" +
                  comment.card.api_id,
                {
                  headers: {
                    "X-RapidAPI-Key": process.env.HS_APIKEY,
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                  },
                }
              )
              .then(({ data }) => resolve(data[0]))
              .catch((error) => reject(error));
          });
          return comment;
        })
      ).then((comments) => {
        console.log(comments);
        res.render("homepage", {
          comments,
          loggedIn: req.session.loggedIn,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Render a single comment  Page
router.get("/comment/:id", (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "createdAt", "comment_text"],
    include: [
      {
<<<<<<< HEAD
        model: Card,
        attributes: ['id', 'user_id'],
=======
        model: Comment,
        attributes: ["id", "card_id", "user_id"],
>>>>>>> feature/cards
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "Not found " });
        return;
      }

      // serialize the data
      const comment = dbCommentData.get({ plain: true });

      // pass data to template
      res.render("single-comment", {
        comment,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD

// Login Page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render Sign-up page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("sign-up");
});

=======
// Login  Page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render Sign up page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

>>>>>>> feature/cards
module.exports = router;

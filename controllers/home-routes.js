//dependcies
const router = require("express").Router();
const sequelize = require("../config/connection");
const axios = require("axios");
const { Card, User, Comment } = require("../models");

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
        model: Comment,
        attributes: ["id", "card_id", "user_id"],
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

module.exports = router;

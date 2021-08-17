// getting the data for front end -  coding :Deepa
//dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Card, User, Comment, Favorite } = require("../models");

// Home Page - Get all Cards  associated with user along with comments
// to be filled - by Dyravuth yorn

//Get comments
router.get("/", (req, res) => {
  // Get all Comments
  Comment.findAll({
    attributes: ["id", "comment_text", "createdAt"],
    // Include card details
    include: [
      {
        model: Card,
        attributes: ["id", "card_name", "api_id", "card_img"],
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
router.get("/", (req, res) => {
  // Get all Comments
  Comment.findAll({
    attributes: ["id", "comment_text", "user_id"],
    // Include card details
    include: [
      {
        model: Card,
        attributes: ["id"],
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
      // Upon success,Get the comments  and render it on homepage
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
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

//Render a single comment  Page
router.get("/comments/:id", (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "createdAt", "comment_text"],
    include: [
      {
        model: Card,
        attributes: ["id", "user_id"],
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

<<<<<<< HEAD
=======
// card section
router.get("/", (req, res) => {
  Card.findAll({
    attributes: ["id", "api_id", "card_name", "card_img"],
    include: [
      // include the Card details here:
      {
        model: Comment,
        attributes: ["id", "comment_text"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  }).then((dbCardData) => {
    // Upon success, get the cards data and render it on homepage
    const cards = dbCardData.map((card) => card.get({ plain: true }));
    res.render("homepage", {
      cards,
      loggedIn: req.session.loggedIn,
    });
  });
});

// card get by id
// router.get("/:id", (req, res) => {
//   Card.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["id", "card_name", "api_id", "card_img"],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//     ],
//   })
//     .then((dbCardData) => {
//       if (!dbCardData) {
//         res.status(404).json({ message: "Not found - home-routes" });
//         return;
//       }
//       // serialize the data
//       const card = dbCardData.get({ plain: true });
//       // pass data to template
//       res.render("single-card", {
//         card,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
>>>>>>> 82e512a167cdfaf3206a64ba6c813343eddf1728
module.exports = router;

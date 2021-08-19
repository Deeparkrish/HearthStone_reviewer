const router = require("express").Router();
const sequelize = require("../config/connection"); // import db connection
const { Card, User, Comment } = require("../models"); // import Models
const withAuth = require("../utils/auth"); // import withAuth function

// Get all comments
//withauth restricts it to authenticated users only.
router.get("/", withAuth, (req, res) => {
  Comment.findAll({
    where: {
      // only display comments created by the logged in user.
      user_id: req.session.user_id,
    },
    attributes: ["id", "comment_text", "createdAt", "updatedAt"],
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
      // Upon success, get the comments and render it on homepage
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      res.render("dashboard", {
        comments,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get comment by id
router.get("/edit/:id", withAuth, (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "comment_text", "createdAt", "updatedAt"],
    include: [
      {
        model: Card,
        attributes: ["id"],
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
        res.status(404).json({ message: "No comments!" });
        return;
      }
      // serialize the data
      const comment = dbCommentData.get({ plain: true });

      res.render("edit-comment", {
        comment,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a comment
router.get("/create/", withAuth, (req, res) => {
  Comment.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: ["id", "comment_text", "createdAt", "updatedAt"],
    include: [
      {
        model: Card,
        attributes: ["id"],
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
      // serialize data before passing to template
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      res.render("add-comment", { comments, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// card section
router.get("/", (req, res) => {
  Card.findAll({
    where: {
    // only display cards created by the logged in user.
    user_id: req.session.user_id,
    },    
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
router.get("/:id", (req, res) => {
  Card.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "card_name", "api_id", "card_img"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbCardData) => {
      if (!dbCardData) {
        res.status(404).json({ message: "Not found - home-routes" });
        return;
      }
      // serialize the data
      const card = dbCardData.get({ plain: true });
      // pass data to template
      res.render("single-card", {
        card,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

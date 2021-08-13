// code : deepa 
//Import dependencies needed 
const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// GET /api/users- all user data 
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] }, // hide the password detail 
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1 - user data by id 
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },// hide the password detail 
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      // If id not found 
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users - add a new usew
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1 - update a user details 
router.put("/:id", withAuth, (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    // pass in req.body instead to only update what's passed through
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      // if id not found 
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// User login 
router.post("/login", (req, res) => {
  // expects the user email upon login
  User.findOne({
    where: {
      email: req.body.email, //verify email
    },
  }).then(async (dbUserData) => {
    // If the email is not found
    console.log(req.body);
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    //If email matches   verify password
    const validPassword = await dbUserData.checkPassword(req.body.password); // check if password is correct
    // if password is incorrect
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    // if passowrd is correct
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// Logout from a session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

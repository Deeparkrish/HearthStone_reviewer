const router = require("express").Router();

// route matches /api/user
router
  .route("/")
  .post
  //call User controller to create user
  ()
  .put
  //authenticate user
  ();

// route matches /api/user/:id
router
  .route("/:id")
  .get
  //call User controller for handling get user request
  ();

module.exports = router;

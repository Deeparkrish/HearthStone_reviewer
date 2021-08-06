const router = require("express").Router();
const userController = require("../../../controllers/User");
// route matches /api/user
router
  .route("/")
  .post(
    //call User controller to create user
    userController.createUser
  )
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

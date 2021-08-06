const db = require("../../models");
const createUser = (req, res) => {
  db.User.create(req.body)
    .then((user) => {
      user.password = "";
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
};

module.exports = { createUser };

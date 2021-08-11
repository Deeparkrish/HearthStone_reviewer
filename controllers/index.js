// add dependencies
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
// use all routes defined
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

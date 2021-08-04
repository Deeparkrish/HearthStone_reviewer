const router = require('express').Router();
// Home page 
router.get('/', (req, res) => {
  res.render('homepage');
});
// Login Page 
// login  api routes 
router.get('/login', (req, res) => {
  res.render('login');
});
module.exports = router;
// To post comments on the page 



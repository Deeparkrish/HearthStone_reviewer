// user authnetication
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login'); // if not authneticated redirect to log in page 
    } else {
      next(); // call the next funtion  with same req,res values 
    }
  };
  
  
  module.exports = withAuth;
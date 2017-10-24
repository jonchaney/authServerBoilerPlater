const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');

let requireAuth = passport.authenticate('jwt', { session: false });
let requireLogin = passport.authenticate('local', { session: false });
let router = require('express').Router();
const passportService = require('./passport');

function protected(req, res, send) {
  res.send("Here's the secret");
}

// Auth Routes 
// _______________________________________
router.route('/signup')
.post(AuthenticationController.signup);
router.route('/signin')
.post(requireLogin, AuthenticationController.signin);

// xxx Routes 
// _______________________________________
// router.route('/protected')
//   .get(requireAuth, protected);

module.exports = router;
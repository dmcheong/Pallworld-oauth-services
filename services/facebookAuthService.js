const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const config = require('../config/facebookConfig');

passport.use(new FacebookStrategy({
  clientID: config.client_id,
  clientSecret: config.client_secret,
  callbackURL: config.redirect_uri,
  profileFields: ['id', 'emails', 'name']
},
(accessToken, refreshToken, profile, done) => {
  // Ici, vous pouvez gérer la logique d'authentification
  // Par exemple, enregistrer l'utilisateur dans votre base de données
  return done(null, profile);
}));

exports.authenticate = passport.authenticate('facebook', { scope: ['email'] });

exports.handleAuthCallback = passport.authenticate('facebook', {
  successRedirect: '/success', // Redirigez ici après une connexion réussie
  failureRedirect: '/error' // Redirigez ici en cas d'échec de connexion
});
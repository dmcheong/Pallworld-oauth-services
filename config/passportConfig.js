// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const InstagramStrategy = require('passport-instagram').Strategy;
// require('dotenv').config();


// // Configuration des stratégies OAuth pour Facebook
// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_APP_ID,
//   clientSecret: process.env.FACEBOOK_APP_SECRET,
//   callbackURL: "http://localhost:3006/auth/facebook/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   // Logique de traitement après l'authentification avec Facebook
//   // Utiliser 'done' pour passer le contrôle à la prochaine étape
//   return done(null, { profile, accessToken });
// }
// ));

// // Configuration des stratégies OAuth pour Instagram
// passport.use(new InstagramStrategy({
//   clientID: process.env.INSTAGRAM_APP_ID,
//   clientSecret: process.env.INSTAGRAM_APP_SECRET,
//   callbackURL: "http://localhost:3006/auth/instagram/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   // Logique de traitement après l'authentification avec Instagram
//   // Utiliser 'done' pour passer le contrôle à la prochaine étape
//   return done(null, { profile, accessToken });
// }
// ));

// // Sérialisation et désérialisation de l'utilisateur (non nécessaire pour OAuth)
// passport.serializeUser(function(user, done) {
// done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
// done(null, obj);
// });









// // const passport = require('passport');
// // const FacebookStrategy = require('passport-facebook').Strategy;
// // const session = require('express-session');
// // const config = require('./facebookConfig'); // Importez votre fichier de configuration

// // // Configuration de la stratégie Facebook
// // passport.use(new FacebookStrategy({
// //     clientID: config.client_id,
// //     clientSecret: config.client_secret,
// //     callbackURL: config.redirect_uri
// //   },
// //   (accessToken, refreshToken, profile, done) => {
// //     // Ici, vous pouvez enregistrer ou récupérer l'utilisateur depuis la base de données
// //     return done(null, profile);
// //   }
// // ));

// // // Configuration de la sérialisation de l'utilisateur
// // passport.serializeUser((user, done) => {
// //   done(null, user);
// // });

// // passport.deserializeUser((obj, done) => {
// //   done(null, obj);
// // });

// // module.exports = passport;

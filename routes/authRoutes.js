const express = require('express');
const router = express.Router();
// const passport = require('passport');
const authController = require('../controllers/authController');
// const facebookAuthController = require('../controllers/facebookAuthController');
// const instagramAuthController = require('../controllers/instaAuthController');


///////////////////////////////////////////////////////////////////////////
// const FacebookStrategy = require('passport-facebook').Strategy;
// const InstagramStrategy = require('passport-instagram').Strategy;
// const session = require('express-session');
// require('dotenv').config();
// const app = express();


// // Initialisation et session de Passport
// app.use(passport.initialize());
// app.use(passport.session());

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



///////////////////////////////////////////////////////////////////

// router.get('/', authController.renderLoginPage);
router.get('/auth/google', authController.redirectToGoogleAuth);
router.get('/api/sessions/oauth/google', authController.handleGoogleAuthCallback);






// // Routes pour l'authentification avec Facebook
// app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Redirection vers le front-end après l'authentification réussie
//     res.redirect('http://localhost:3001'); // Changez l'URL en fonction de votre front-end
//   });

// // Routes pour l'authentification avec Instagram
// app.get('/auth/instagram', passport.authenticate('instagram'));

// app.get('/auth/instagram/callback',
//   passport.authenticate('instagram', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Redirection vers le front-end après l'authentification réussie
//     res.redirect('http://localhost:3001'); // Changez l'URL en fonction de votre front-end
//   });







// router.get('/auth/instagram', instagramAuthController.redirectToInstagramAuth);
// router.get('/api/sessions/oauth/instagram', instagramAuthController.handleInstagramAuthCallback);

// // Route pour démarrer le processus d'authentification avec Facebook
// router.get('/auth/facebook',
//   passport.authenticate('facebook', { scope: ['email'] })
// );

// // Route de rappel après l'authentification avec Facebook
// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Authentification réussie, redirigez ici
//     res.redirect('/');
//   }
// );





// router.get('/auth/facebook', facebookAuthController.redirectToFacebookAuth);
// router.get('/api/sessions/oauth/facebook', facebookAuthController.handleFacebookAuthCallback);


// router.get('/facebook', facebookAuthController.facebookAuthRedirect);
// router.get('/facebook/callback', facebookAuthController.facebookAuthCallback);

// router.get('/instagram', instagramAuthController.instagramAuthRedirect);
// router.get('/instagram/callback', instagramAuthController.instagramAuthCallback);

module.exports = router;

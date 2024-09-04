const express = require('express');
const bodyParser = require('body-parser'); // Middleware pour analyser les corps de requête
const morgan = require('morgan'); // Middleware pour enregistrer les requêtes HTTP dans la console
const path = require('path');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const authRoutes = require('./routes/authRoutes');
// const passport = require('./config/passportConfig');
const cors = require('cors');



const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
require('dotenv').config();




const app = express();

// Middleware pour analyser les corps de requête
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware pour gérer les sessions
app.use(sessionMiddleware);

// Middleware pour les logs de requêtes HTTP dans la console
app.use(morgan('dev'));

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use('/', authRoutes);

// Activez CORS pour toutes les routes
app.use(cors());

// Configuration des stratégies OAuth pour Facebook
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3006/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log('Authentification Facebook réussie'); // Console log pour le débogage
  // Logique de traitement après l'authentification avec Facebook
  // Vous pouvez ajouter ici toute logique de traitement supplémentaire
  // Une fois terminé, redirigez vers votre front-end
  return done(null, { profile, accessToken });
}
));

// Configuration des stratégies OAuth pour Instagram
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_APP_ID,
  clientSecret: process.env.INSTAGRAM_APP_SECRET,
  callbackURL: "http://localhost:3006/auth/instagram/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log('Authentification Instagram réussie'); // Console log pour le débogage
  // Logique de traitement après l'authentification avec Instagram
  // Vous pouvez ajouter ici toute logique de traitement supplémentaire
  // Une fois terminé, redirigez vers votre front-end
  return done(null, { profile, accessToken });
}
));

// Sérialisation et désérialisation de l'utilisateur (non nécessaire pour OAuth)
passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(obj, done) {
done(null, obj);
});

// Middleware pour la gestion des sessions
app.use(session({ secret: 'votre_secret', resave: true, saveUninitialized: true }));

// Initialisation et session de Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes pour l'authentification avec Facebook
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
  console.log('Redirection vers le front-end après authentification Facebook réussie'); // Console log pour le débogage
  // Redirection vers le front-end après l'authentification réussie
  res.redirect('http://localhost:3001'); // Modifier l'URL en fonction de votre front-end
});

// Routes pour l'authentification avec Instagram
app.get('/auth/instagram', passport.authenticate('instagram'));

app.get('/auth/instagram/callback',
passport.authenticate('instagram', { failureRedirect: '/login' }),
function(req, res) {
  console.log('Redirection vers le front-end après authentification Instagram réussie'); // Console log pour le débogage
  // Redirection vers le front-end après l'authentification réussie
  res.redirect('http://localhost:3001'); // Modifier l'URL en fonction de votre front-end
});

// // Initialisation de Passport
// app.use(passport.initialize());
// app.use(passport.session());

// Démarrage du serveur Express
const PORT = process.env.PORT || 3006; // Utilisation du port spécifié dans les variables d'environnement ou le port 3006 par défaut
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// // Import des modules nécessaires
// const { OAuth2Client } = require('google-auth-library');
// const express = require('express');
// const bodyParser = require('body-parser'); // Middleware pour analyser les corps de requête
// const session = require('express-session'); // Middleware pour gérer les sessions utilisateur
// const morgan = require('morgan'); // Middleware pour enregistrer les requêtes HTTP dans la console
// const path = require('path');
// require('dotenv').config(); // Module pour charger les variables d'environnement à partir d'un fichier .env

// // Initialisation de l'application Express
// const app = express();

// // Configuration des middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(session({
//   secret: process.env.SESSION_SECRET, // Clé secrète pour signer les cookies de session
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(morgan('dev')); // Configuration de morgan en mode développement

// // Récupération des variables d'environnement
// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // Identifiant client Google OAuth
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET; // Secret client Google OAuth
// const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL; // URL de redirection après l'authentification

// // Création d'une instance de client OAuth2
// const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// // Middleware pour servir les fichiers statiques depuis le répertoire public
// app.use(express.static(path.join(__dirname, 'public')));

// // Route pour afficher la page de login
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });

// // Endpoint pour démarrer l'authentification OAuth avec Google
// app.get('/auth/google', (req, res) => {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: ['https://www.googleapis.com/auth/userinfo.email'] // Autorisations requises
//   });
//   res.redirect(authUrl);
// });

// // Endpoint de redirection après l'authentification réussie
// app.get('/api/sessions/oauth/google', async (req, res) => {
//   const code = req.query.code;

//   try {
//     // Échange du code d'autorisation contre un jeton d'accès
//     const { tokens } = await oAuth2Client.getToken(code);
//     // Stockez les tokens dans une base de données ou une session sécurisée
//     console.log(tokens);
//     // Redirection vers votre frontend avec le jeton d'accès dans l'URL
//     res.redirect('http://localhost:3001/?access_token=' + tokens.access_token);
//   } catch (error) {
//     console.error('Error retrieving access token', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Démarrage du serveur Express
// const PORT = process.env.PORT || 3006; // Utilisation du port spécifié dans les variables d'environnement ou le port 3006 par défaut
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


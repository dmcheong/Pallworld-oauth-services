const { OAuth2Client } = require('google-auth-library');
require('dotenv').config(); // Module pour charger les variables d'environnement à partir d'un fichier .env

// Récupération des variables d'environnement
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // Identifiant client Google OAuth
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET; // Secret client Google OAuth
const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL; // URL de redirection après l'authentification

// Création d'une instance de client OAuth2
const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

module.exports = oAuth2Client;

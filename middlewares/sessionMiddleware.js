const session = require('express-session'); // Middleware pour gérer les sessions utilisateur
const path = require('path');
require('dotenv').config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET, // Clé secrète pour signer les cookies de session
  resave: false,
  saveUninitialized: true
});

module.exports = sessionMiddleware;

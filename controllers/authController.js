const path = require('path');
const oAuth2Client = require('../config/oauthConfig');
const authService = require('../services/googleAuthService');

exports.redirectToGoogleAuth = (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.email']
  });
  res.redirect(authUrl);
};

exports.handleGoogleAuthCallback = async (req, res) => {
  const code = req.query.code;

  try {
    // Échange du code d'autorisation contre un jeton d'accès
    const tokens = await authService.exchangeCodeForToken(code);
    // Stockez les tokens dans une base de données ou une session sécurisée
    console.log(tokens);
    // Redirection vers votre frontend avec le jeton d'accès dans l'URL
    res.redirect('http://localhost:3000/?access_token=' + tokens.access_token);
  } catch (error) {
    console.error('Error retrieving access token', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

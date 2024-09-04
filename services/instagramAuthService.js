const Instagram = require('instagram-node');
const config = require('../config/instagramConfig');

// Crée une instance de l'API Instagram
const instagramAPI = new Instagram.instagram();

// Configure l'API avec vos identifiants d'application Instagram
instagramAPI.use({
  client_id: config.client_id,
  client_secret: config.client_secret
});

// Méthode pour récupérer l'URL d'authentification Instagram
exports.getAuthUrl = () => {
  return instagramAPI.get_authorization_url(config.redirect_uri, { scope: ['basic'], state: 'your-state' });
};

// Méthode pour échanger le code d'autorisation contre un jeton d'accès
exports.exchangeCodeForToken = (code) => {
  return new Promise((resolve, reject) => {
    instagramAPI.authorize_user(code, config.redirect_uri, (err, result) => {
      if (err) {
        console.error('Error exchanging code for token:', err);
        reject(err);
      } else {
        console.log('Access token:', result.access_token);
        resolve(result.access_token);
      }
    });
  });
};

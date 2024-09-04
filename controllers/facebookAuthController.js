const facebookAuthService = require('../services/facebookAuthService');

exports.redirectToFacebookAuth = (req, res) => {
  facebookAuthService.authenticate(req, res);
};

exports.handleFacebookAuthCallback = (req, res) => {
  facebookAuthService.handleAuthCallback(req, res);
};





// const axios = require('axios');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// exports.facebookAuthCallback = async (req, res) => {
//   const code = req.query.code;
//   const redirectUri = 'http://localhost:3001/auth/facebook/callback';
//   const clientId = process.env.FACEBOOK_APP_ID;
//   const clientSecret = process.env.FACEBOOK_APP_SECRET;
  
//   try {
//     // Étape 1 : Récupération de l'access token depuis la réponse de Facebook
//     const { data: tokenResponse } = await axios.get(`https://graph.facebook.com/v12.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`);
//     const accessToken = tokenResponse.access_token;
    
//     // Étape 2 : Utilisation de l'access token pour récupérer les informations de l'utilisateur
//     const { data: userData } = await axios.get(`https://graph.facebook.com/me?fields=id,email&access_token=${accessToken}`);

//     // Étape 3 : Création du payload JWT
//     const payload = {
//       userId: userData.id,
//       email: userData.email,
//       // Autres données d'utilisateur que vous souhaitez inclure
//     };

//     // Étape 4 : Génération du token JWT
//     const jwtToken = jwt.sign(payload, process.env.JWT_SECRET_FACEBOOK, { expiresIn: '1h' });

//     // Étape 5 : Redirection avec le token JWT
//     res.redirect(`../public/loginFace.html?token=${jwtToken}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Erreur lors de l\'authentification');
//   }
// };

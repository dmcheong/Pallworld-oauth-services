const instagramAuthService = require('../services/instagramAuthService');

exports.redirectToInstagramAuth = (req, res) => {
  // Supposons que le code d'autorisation soit passé en tant que paramètre de requête 'code' dans l'URL
  const code = req.query.code;
  console.log('Received auth code:', code);

  // Stockez le code d'autorisation dans la session
  req.session.instagramAuthCode = code;

  const authUrl = instagramAuthService.getAuthUrl();
  console.log('Redirecting to Instagram auth:', authUrl);
  res.redirect(authUrl);
};

exports.handleInstagramAuthCallback = async (req, res) => {
  const code = req.session.instagramAuthCode;
  console.log('Received auth code from session:', code);
  try {
    const tokens = await instagramAuthService.exchangeCodeForToken(code);
    console.log('Access token:', tokens);
    res.redirect('http://localhost:3001/?access_token=' + tokens.access_token);
  } catch (error) {
    console.error('Error retrieving access token', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




// const axios = require('axios');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// exports.instagramAuthCallback = async (req, res) => {
//   const code = req.query.code;
//   const redirectUri = 'http://localhost:3001/auth/instagram/callback';
//   const clientId = process.env.INSTAGRAM_APP_ID;
//   const clientSecret = process.env.INSTAGRAM_APP_SECRET;
  
//   try {
//     // Étape 1 : Récupération de l'access token depuis la réponse d'Instagram
//     const formData = {
//       client_id: clientId,
//       client_secret: clientSecret,
//       grant_type: 'authorization_code',
//       redirect_uri: redirectUri,
//       code: code
//     };

//     const tokenResponse = await axios.post('https://api.instagram.com/oauth/access_token', formData);
//     const accessToken = tokenResponse.data.access_token;
    
//     // Étape 2 : Utilisation de l'access token pour récupérer les informations de l'utilisateur
//     const userDataResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
//     const userData = userDataResponse.data;

//     // Étape 3 : Création du payload JWT
//     const payload = {
//       userId: userData.id,
//       username: userData.username,
//       // Autres données d'utilisateur que vous souhaitez inclure
//     };

//     // Étape 4 : Génération du token JWT
//     const jwtToken = jwt.sign(payload, process.env.JWT_SECRET_INSTAGRAM, { expiresIn: '1h' });

//     // Étape 5 : Redirection avec le token JWT
//     res.redirect(`/loginInsta.html?token=${jwtToken}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Erreur lors de l\'authentification');
//   }
// };

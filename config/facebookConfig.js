require('dotenv').config();

module.exports = {
  client_id: process.env.FACEBOOK_APP_ID,
  client_secret: process.env.FACEBOOK_APP_SECRET,
  redirect_uri: 'http://localhost:3006/auth/facebook/callback',
//   redirect_uri: 'http://localhost:3006/api/sessions/oauth/facebook',
};
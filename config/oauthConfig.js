const { OAuth2Client } = require('google-auth-library');
require('dotenv').config(); 

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET; 
const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL; 

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

module.exports = oAuth2Client;

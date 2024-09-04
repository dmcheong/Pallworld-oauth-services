require('dotenv').config();

module.exports = {
    client_id: process.env.INSTAGRAM_APP_ID,
    client_secret: process.env.INSTAGRAM_APP_SECRET,
    redirect_uri: process.env.INSTAGRAM_REDIRECT_URI
};
  
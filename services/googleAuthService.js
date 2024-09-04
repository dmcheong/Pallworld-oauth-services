const oAuth2Client = require('../config/oauthConfig');

exports.exchangeCodeForToken = async (code) => {
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    return tokens;
  } catch (error) {
    throw new Error('Error retrieving access token');
  }
};

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/auth/google', authController.redirectToGoogleAuth);
router.get('/api/sessions/oauth/google', authController.handleGoogleAuthCallback);

module.exports = router;

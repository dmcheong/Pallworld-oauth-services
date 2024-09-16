const session = require('express-session');
const path = require('path');
require('dotenv').config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true
});

module.exports = sessionMiddleware;

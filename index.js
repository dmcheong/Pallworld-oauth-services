const express = require('express');
const bodyParser = require('body-parser'); // Middleware pour analyser les corps de requête
const morgan = require('morgan'); // Middleware pour enregistrer les requêtes HTTP dans la console
const path = require('path');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware pour analyser les corps de requête
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware pour gérer les sessions
app.use(sessionMiddleware);

// Middleware pour les logs de requêtes HTTP dans la console
app.use(morgan('dev'));

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use('/', authRoutes);

// Activez CORS pour toutes les routes
app.use(cors());

// Démarrage du serveur Express
const PORT = process.env.PORT || 3006; // Utilisation du port spécifié dans les variables d'environnement ou le port 3006 par défaut
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

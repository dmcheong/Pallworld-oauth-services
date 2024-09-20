const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(sessionMiddleware);

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes);

app.use(cors());

const PORT = process.env.PORT || 3006; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

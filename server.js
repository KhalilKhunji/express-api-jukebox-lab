// Import Modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

// Database
require('./config/database');

const app = express();

const port = process.env.PORT ? process.env.PORT : "3000";

const trackRouter = require('./controllers/track.js');

// Middleware
app.use(morgan('dev'));

app.use(methodOverride('_method'));

app.use(express.json());

app.use(cors({origin: process.env.CORS_ORIGIN}));

// Routes
app.use('/tracks', trackRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
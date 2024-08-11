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

// Middleware
app.use(morgan('dev'));

app.use(methodOverride('_method'));

app.use(express.json());

// Routes


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
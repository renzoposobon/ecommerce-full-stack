const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Static Files
app.use('/public', express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor en puerto http://localhost:${app.get('port')}`);
});
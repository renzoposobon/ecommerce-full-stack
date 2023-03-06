const express = require('express');
const router = express.Router();
const app = express();

app.get('/', (req, res) => {
  // Esta va cuando este conectado con webpack
  // res.sendFile(__dirname + 'index.html');
  res.send("Hola mundo")
});

module.exports = router;
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log("La base de datos MongoDB se ha conectado exitosamente"))
  .catch(err => console.log(err))

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

module.exports = mongoose
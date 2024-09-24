require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); 

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Definir rutas aquí, como ejemplo:
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;

require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); 

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/citas', citasRoutes);  // Conectar el controlador de citas

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
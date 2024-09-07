require('dotenv').config();  
const express = require('express');
const { Pool } = require('pg');  

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Conexión a la base de datos
pool.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
  } else {
    console.log('Conectado a la base de datos PostgreSQL');
  }
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');  
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;  

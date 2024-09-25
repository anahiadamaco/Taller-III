const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { registerUser } = require('./controllers/userController');
const { Pool } = require('pg');
const routes = require('./routes/userRoute');


// Configura dotenv para manejar variables de entorno
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));


// Define el puerto (puedes usar una variable de entorno o un número de puerto por defecto)
const PORT = process.env.PORT || 3000;

// Middleware para manejar las peticiones
app.use(express.json());

app.use('/api', userRoutes);

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
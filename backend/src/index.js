const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoute');
const { registerUser } = require('./controllers/userController');
const prestadoresRoutes = require('./routes/prestadores');
const serviciosRoutes = require('./routes/servicios');


// Configura dotenv para manejar variables de entorno
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Middleware para manejar las peticiones
app.use(express.json());
app.use('/api/users', userRoutes);
app.post('/api/registerPM', registerUser);
app.use('/api/Admin/prestadores', prestadoresRoutes);
app.use('/api/Admin/Servicios', serviciosRoutes);

// Inicia el servidor y escucha en el puerto definido
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
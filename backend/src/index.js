const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoute');
const { registerUser } = require('./controllers/userController');
const prestadoresRoutes = require('./routes/prestadores');
const serviciosRoutes = require('./routes/servicios');
const User = require('./models/User');

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

// Middleware para manejar las peticiones
app.use(express.json());
app.use('/api/users', userRoutes);
app.post('/api/registerPM', registerUser);
app.use('/api/Admin/prestadores', prestadoresRoutes);
app.use('/api/Admin/Servicios', serviciosRoutes);

//rutas
app.post('/api/login', async (req, res) => {
  const { rut, contrasena } = req.body; // Usa 'contrasena' como definiste en el modelo

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { rut } });

    if (user && user.contrasena === contrasena) { // Compara con la contraseña
      return res.status(200).json({ rol: user.rol });
    }

    return res.status(401).json({ message: 'Credenciales incorrectas' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// Inicia el servidor y escucha en el puerto definido
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./config/db'); 
const usuarioRoutes = require('./routes/userRoute');
const citaRoutes = require('./routes/citaRoute');

// Configura dotenv para manejar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/citas', citaRoutes);

app.post('/api/registerPM', async (req, res) => {
  const {
      rut,
      nombre,
      apellido_paterno,
      apellido_materno,
      fechaNacimiento,
      celular,
      correo,
      contrasena,
      confirmarContrasena,
  } = req.body;

  
  if (contrasena !== confirmarContrasena) {
      return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  try {
      // Verificar si el correo ya está registrado
      const [results] = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);

      if (results.length > 0) {
          return res.status(400).json({ error: 'El correo ya está registrado' });
      }

      const bcrypt = require('bcrypt');
      const hashedPassword = await bcrypt.hash(contrasena, 10);

      // Insertar el nuevo usuario en la base de datos
      const query = `INSERT INTO Usuarios (rut, nombre, apellido_paterno, apellido_materno, fecha_nacimiento, celular, correo, contrasena)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      await pool.query(query, [rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, celular, correo, hashedPassword]);

      res.status(201).json({ message: 'Registro exitoso' });
  } catch (error) {
      console.error('Error en el registro:', error);
      res.status(500).json({ error: 'Error en el registro' });
  }
});


// Exporta la aplicación en lugar de iniciar el servidor aquí
module.exports = app;

<<<<<<< HEAD
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

// Exporta la aplicación en lugar de iniciar el servidor aquí
module.exports = app;
=======
// Importar módulos necesarios
const express = require('express');
const pool = require('./config/db'); // Importar la configuración del pool
require('dotenv').config(); // Cargar variables de entorno

// Inicializar la aplicación
const app = express();

// Middleware para procesar datos JSON
app.use(express.json());

// Verificar conexión a la base de datos
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión exitosa a la base de datos');
    connection.release(); // Liberar la conexión de nuevo al pool
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); // Detener la aplicación si no puede conectar
  }
})();

// Ruta raíz para prueba
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    res.send(`Servidor funcionando correctamente. Resultado: ${rows[0].solution}`);
  } catch (error) {
    console.error('Error al realizar la consulta:', error.message);
    res.status(500).send('Error en la base de datos');
  }
});

// Puerto del servidor
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
>>>>>>> Catalina

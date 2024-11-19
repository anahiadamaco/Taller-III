// Importar módulos necesarios
const express = require('express');
const pool = require('./config/db'); // Importar la configuración del pool
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno
const bodyParser = require('body-parser');

// Verificar las variables de entorno
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

// Inicializar la aplicación
const app = express();
app.use(express.json()); // Middleware para procesar JSON
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',  // Cambiar por tu front-end si es necesario
}));

// Verificar conexión a la base de datos
(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log('Conexión exitosa a la base de datos. Prueba:', rows[0].solution);
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

// Configuración de multer para almacenar la imagen
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    cb(null, uploadPath); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Renombrar la imagen
  },
});

const upload = multer({ storage: storage });

// Ruta para recibir la imagen
app.post('/api/receive-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No se subió ninguna imagen.");
  }

  console.log("Imagen recibida:", req.file.filename);
  res.status(200).send("Imagen recibida y almacenada correctamente.");
});


app.post('/api/prestadores/crear', async (req, res) => {
  const { nombre, correo, id_servicio } = req.body;
  const query = 'INSERT INTO prestadores (nombre, correo, id_servicio) VALUES (?, ?, ?)';
  
  try {
      const [result] = await pool.query(query, [nombre, correo, id_servicio]);
      res.json({ id: result.insertId, nombre, correo, id_servicio });  // Respuesta JSON
  } catch (err) {
      console.error('Error al crear prestador:', err.message);
      res.status(500).json({ error: 'Error al crear prestador.' });  // Asegúrate de responder con JSON
  }
});

// Obtener todos los prestadores
app.get('/api/prestadores', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM prestadores');
    res.json(results);
  } catch (err) {
    console.error('Error al obtener prestadores:', err.message);
    res.status(500).send('Error al obtener prestadores.');
  }
});

// Eliminar un prestador
app.delete('/api/prestadores/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM prestadores WHERE id = ?';
  
  try {
    await pool.query(query, [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error('Error al eliminar prestador:', err.message);
    res.status(500).send('Error al eliminar prestador.');
  }
});


// Cita reservada
app.post('/api/citas', async (req, res) => {
  const { fecha, hora, prestador } = req.body;
  const query = 'INSERT INTO Cita (estado, id_hora, reg_paciente) VALUES (?, ?, ?)';
  try {
    const [result] = await pool.query(query, [fecha, hora, prestador]);
    res.status(201).json({ message: 'Cita reservada con éxito' });
  } catch (err) {
    console.error('Error al reservar la cita:', err);
    res.status(500).json({ message: 'Error al reservar la cita', error: err });
  }
});

// Ruta en Node.js para obtener el nombre del usuario
app.get('/api/usuario', (req, res) => {
  const userId = req.user.id; // Suponiendo que usas autenticación y tienes el ID del usuario
  const query = 'SELECT nombre FROM personas_mayores WHERE id = ?';
  
  db.query(query, [userId], (error, results) => {
    if (error) return res.status(500).json({ error: 'Error al obtener el nombre' });
    if (results.length > 0) {
      res.json({ nombre: results[0].nombre });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3308;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

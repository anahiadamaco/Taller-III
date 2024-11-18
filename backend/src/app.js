// Importar módulos necesarios
const express = require('express');
const pool = require('./db'); // Importar la configuración del pool
require('dotenv').config(); // Cargar variables de entorno

// Verificar las variables de entorno
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

// Inicializar la aplicación
const app = express();
app.use(express.json()); // Middleware para procesar JSON

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

// Puerto del servidor
const PORT = process.env.PORT || 3308;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

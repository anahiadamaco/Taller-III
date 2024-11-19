const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const dbConfig = {
    host: 'localhost',
    user: 'nuevo_usuario',
    password: 'nueva_contraseña',
    database: 'nueva_base',
};

// Ruta para obtener los datos
app.get('/prestador-servicios', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM Prestador_Servicios');
        await connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).send('Error al obtener los datos.');
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

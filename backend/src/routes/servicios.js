const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Ajusta la importación de tu conexión a la base de datos

// Obtener todos los servicios
router.get('/api/Admin/Servicios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Servicio"');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener servicios');
    }
});

// Crear un nuevo servicio
router.post('/api/Admin/Servicios', async (req, res) => {
    const { nombre } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO "Servicio" (nombre) VALUES ($1) RETURNING *',
            [nombre]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el servicio');
    }
});

module.exports = router;

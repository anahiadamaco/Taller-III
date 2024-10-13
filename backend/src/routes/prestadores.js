const express = require('express');
const router = express.Router();
const pool = require('../db');  // Asegúrate de que tu pool de conexión esté configurado

// Crear un nuevo prestador
router.post('/crear', async (req, res) => {
    const { nombre, correo, id_servicio } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO "Prestador_Servicio" (nombre, correo, id_servicio) VALUES ($1, $2, $3) RETURNING *',
            [nombre, correo, id_servicio]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al crear el prestador:', error);
        res.status(500).json({ error: 'Error al crear el prestador' });
    }
});

// Eliminar un prestador
router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM "Prestador_Servicio" WHERE id = $1', [id]);
        res.status(200).json({ message: 'Prestador eliminado' });
    } catch (error) {
        console.error('Error al eliminar el prestador:', error);
        res.status(500).json({ error: 'Error al eliminar el prestador' });
    }
});

module.exports = router;

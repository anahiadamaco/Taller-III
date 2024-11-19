const pool = require('../db');

// Otener los datos de atenciones mensuales
const AtencionesMensuales = async (req, res) => {
    const query = `
    SELECT EXTRACT(MONTH FROM h.fecha_hora) AS mes, COUNT(*) AS total_atenciones
    FROM Cita c
    JOIN Horario h ON c.id_hora = h.id_hora
    WHERE c.asistencia = true
    GROUP BY mes
    ORDER BY mes;
    `;
    
    try {
        const resultado = await pool.query(query);
        res.json(resultado.rows);
    } catch (err) {
        console.error('Error al obtener atenciones mensuales:', err);
        res.status(500).json({ error: 'Error al obtener los datos de atenciones' });
    }
};

module.exports = {
    AtencionesMensuales,
};

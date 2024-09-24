const pool = require('../db');

// Obtener todas las citas
const getCitas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Citacion');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error obteniendo citas:', err);
    res.status(500).json({ error: 'Error obteniendo citas' });
  }
};

// Crear nueva cita
const createCita = async (req, res) => {
  const { estado, id_administrador, id_horario, id_usuario } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO Citacion (Estado, Id_Administrador, Id_Horario, Id_Usuario) VALUES ($1, $2, $3, $4) RETURNING *',
      [estado, id_administrador, id_horario, id_usuario]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creando cita:', err);
    res.status(500).json({ error: 'Error creando cita' });
  }
};

// Modificar una cita existente
const updateCita = async (req, res) => {
    const { id } = req.params;
    const { estado, id_administrador, id_horario, id_usuario } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE Citacion SET Estado = $1, Id_Administrador = $2, Id_Horario = $3, Id_Usuario = $4 WHERE Id_Citacion = $5 RETURNING *',
        [estado, id_administrador, id_horario, id_usuario, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Cita no encontrada' });
      }
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error actualizando cita:', err);
      res.status(500).json({ error: 'Error actualizando cita' });
    }
  };
  
  module.exports = {
    getCitas,
    createCita,
    updateCita,  
 };

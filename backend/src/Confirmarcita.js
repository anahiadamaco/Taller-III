const mysql = require('mysql2');

// Crear conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

function ActualizarEstado(rut, nuevoEstado, callback) {
    // Validar el nuevo estado
    if (!['Confirmada', 'Cancelada'].includes(nuevoEstado)) {
        return callback(new Error(`Estado no válido: ${nuevoEstado}`), null);
    }
    
    // Consulta SQL para actualizar el estado
    const consulta = `
        UPDATE Cita
        SET Estado = ?
        WHERE Rut = ? AND Estado = 'Pendiente';
    `;

    // Ejecutar la consulta
    db.query(consulta, [nuevoEstado, rut], (error, results) => {
        if (error) {
            return callback(error, null);
        }

        // Validar si se actualizo alguna fila
        if (results.affectedRows > 0) {
            callback(null, { mensaje: `Cita del RUT ${rut} actualizada a: ${nuevoEstado}` });
        } else {
            callback(null, { mensaje: `No se encontro una cita pendiente para el RUT ${rut}.` });
        }
    });
}

// Ejemplo de confirmar una cita
ActualizarEstado('12345678-9', 'Confirmada', (error, resultado) => {
  if (error) {
    console.error('Error al confirmar la cita:', error.message);
  } else {
    console.log(resultado.mensaje);
  }
});

// Ejemplo de cancelar una cita
ActualizarEstado('98765432-1', 'Cancelada', (error, resultado) => {
    if (error) {
        console.error('Error al cancelar la cita:', error.message);
    } else {
        console.log(resultado.mensaje);
    }
});

// Cerrar la conexión al finalizar todas las operaciones
db.end();

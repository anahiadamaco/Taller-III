const mysql = require('mysql2');
const nodemailer = require('nodemailer');

// Crear conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Configuración del transporte de correos
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia según tu proveedor de correo
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Función para enviar recordatorios
function enviarRecordatorios(callback) {
    const consulta = `
        SELECT fechacita, nombre, apellido, rut, correo
        FROM Cita
        WHERE estado = 'Pendiente'
          AND recordatorio_enviado = FALSE
          AND DATE(fechacita) = CURDATE() + INTERVAL 1 DAY;
    `;

    db.query(consulta, (error, results) => {
        if (error) {
            return callback(error, null);
        }

        if (results.length === 0) {
            return callback(null, { mensaje: 'No hay citas para recordar.' });
        }

        results.forEach((cita) => {
            const { fechacita, nombre, apellido, rut, correo } = cita;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: correo, // Enviar al correo del usuario
                subject: 'Recordatorio de Cita',
                text: `Hola ${nombre} ${apellido}, recuerda tu cita programada para el ${fechacita}. RUT: ${rut}.`,
            };

            // Enviar correo
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Error al enviar recordatorio:', err.message);
                    return;
                }

                console.log(`Recordatorio enviado a ${nombre} ${apellido} (${rut}) - Correo: ${correo}.`);

                // Marcar el recordatorio como enviado
                const updateQuery = `UPDATE Cita SET recordatorio_enviado = TRUE WHERE rut = ? AND fechacita = ?`;
                db.query(updateQuery, [rut, fechacita], (updateErr) => {
                    if (updateErr) {
                        console.error('Error al actualizar recordatorio:', updateErr.message);
                    }
                });
            });
        });

        callback(null, { mensaje: 'Recordatorios enviados correctamente.' });
    });
}

// Llamar a la función de recordatorios
enviarRecordatorios((error, resultado) => {
    if (error) {
        console.error('Error al procesar recordatorios:', error.message);
    } else {
        console.log(resultado.mensaje);
    }

    // Cerrar la conexión al finalizar
    db.end();
});

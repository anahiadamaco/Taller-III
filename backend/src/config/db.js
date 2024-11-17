require('dotenv').config();

const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error al conectar a la base de datos:');
        console.error('Código:', err.code);
        console.error('Mensaje:', err.message);
        return;
    }

    console.log('Conexión establecida correctamente:', !!connection);

    if (connection) {
        connection.release();
        console.log('Conexión liberada.');
    }
});

module.exports = pool;


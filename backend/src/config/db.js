<<<<<<< HEAD
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

// Mostrar las variables de entorno para confirmar que se cargaron correctamente
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const mysql = require('mysql2');

// Crear un pool de conexiones utilizando las variables de entorno
=======
require('dotenv').config();

const mysql = require('mysql');

>>>>>>> Catalina
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
<<<<<<< HEAD
    port: process.env.DB_PORT, // Asegúrate de que el puerto sea el correcto
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Usar el pool con promesas para facilitar el uso de async/await
const promisePool = pool.promise();

// Función para probar la conexión a la base de datos
async function testConnection() {
    try {
        // Ejecutar una consulta sencilla para verificar la conexión
        const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
        console.log('Conexión exitosa a la base de datos:', rows[0].result);
    } catch (error) {
        // Capturar cualquier error en la conexión
        console.error('Error al conectar a la base de datos:', error);
    }
}

// Ejecutar la prueba de conexión
testConnection();

// Función para cerrar el pool cuando ya no sea necesario
function closePool() {
    pool.end(() => {
        console.log('Conexiones cerradas correctamente');
    });
}

// Exportar el promisePool para su uso en otros módulos
module.exports = promisePool;
=======
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

>>>>>>> Catalina

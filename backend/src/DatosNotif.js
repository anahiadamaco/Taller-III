const mysql = require('mysql2');

// Crear conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Consulta para extraer los datos
const consulta = `
    SELECT 
        Nombre,
        Via_contacto,
        CASE 
            WHEN Via_contacto = 'correo electronico' THEN correo_electronico
            WHEN Via_contacto = 'llamada' THEN telefono
            ELSE NULL
        END AS Contacto
    FROM 
        Persona_Mayor;
`;

// Ejecutar la consulta
db.query(consulta, (error, results) => {
    if (error) {
        console.error('Error al ejecutar la consulta:', error);
    return;
    }
    
    // Procesar resultados
    console.log('Datos de contacto:', results);
});

// Cerrar la conexión
db.end();

require('dotenv').config();  
const express = require('express');
const { Pool } = require('pg');  

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Conexión a la base de datos y creación de tablas
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
  } else {
    console.log('Conectado a la base de datos PostgreSQL');

    // Creación de tablas si no existen
    const createTablesQuery = `
      CREATE TABLE IF NOT EXISTS Usuario (
        Rut VARCHAR(15) PRIMARY KEY,
        Nombres VARCHAR(30),
        Apellido_Paterno VARCHAR(15),
        Apellido_Materno VARCHAR(15),
        Edad INT,
        Fecha_Nac DATE,
        Ciudad VARCHAR(20),
        Calle VARCHAR(20),
        Numero INT,
        Numero_Telefono INT
      );

      CREATE TABLE IF NOT EXISTS PersonaMayor (
        Id_Usuario INT PRIMARY KEY,
        Condicion VARCHAR(50),
        Movilidad BOOLEAN,
        Rut VARCHAR(15),
        FOREIGN KEY (Rut) REFERENCES Usuario(Rut)
      );
      
      -- Continúa con el resto de las tablas...
      CREATE TABLE IF NOT EXISTS Especialista (
        Id_Especialista INT PRIMARY KEY,
        Especialidad VARCHAR(20),
        Rut VARCHAR(15),
        FOREIGN KEY (Rut) REFERENCES Usuario(Rut)
      );

      CREATE TABLE IF NOT EXISTS Via (
        Id_Via INT PRIMARY KEY,
        Via VARCHAR(20)
      );

      CREATE TABLE IF NOT EXISTS Administrador (
        Id_Administrador INT PRIMARY KEY,
        Correo_Municipal VARCHAR(64),
        Contrasena VARCHAR(64),
        Rut VARCHAR(15),
        FOREIGN KEY (Rut) REFERENCES Usuario(Rut)
      );

      CREATE TABLE IF NOT EXISTS Servicio (
        Id_Servicio INT PRIMARY KEY,
        Nombre_Servicio VARCHAR(20),
        Personal INT,
        Cupos INT,
        Id_Especialista INT,
        FOREIGN KEY (Id_Especialista) REFERENCES Especialista(Id_Especialista)
      );

      CREATE TABLE IF NOT EXISTS Notificacion (
        Id_Notificacion INT PRIMARY KEY,
        Hora_Envio VARCHAR(5),
        Fecha_Envio DATE,
        Mensaje VARCHAR(60),
        Id_Servicio INT,
        Id_Via INT,
        FOREIGN KEY (Id_Servicio) REFERENCES Servicio(Id_Servicio),
        FOREIGN KEY (Id_Via) REFERENCES Via(Id_Via)
      );

      CREATE TABLE IF NOT EXISTS Horario (
        Id_Horario INT PRIMARY KEY,
        Fecha DATE,
        Hora_Termino VARCHAR(5),
        Hora_Inicio VARCHAR(5),
        Id_Especialista INT,
        FOREIGN KEY (Id_Especialista) REFERENCES Especialista(Id_Especialista)
      );

      CREATE TABLE IF NOT EXISTS Citacion (
        Id_Citacion INT PRIMARY KEY,
        Estado BOOLEAN,
        Id_Administrador INT,
        Id_Horario INT,
        Id_Usuario INT,
        FOREIGN KEY (Id_Administrador) REFERENCES Administrador(Id_Administrador),
        FOREIGN KEY (Id_Horario) REFERENCES Horario(Id_Horario),
        FOREIGN KEY (Id_Usuario) REFERENCES Usuario(Rut)
      );

      CREATE TABLE IF NOT EXISTS Historial (
        Id_Historial SERIAL PRIMARY KEY,
        Id_Usuario INT,
        Id_Servicio INT,
        Id_Especialista INT,
        Id_Citacion INT,
        Id_Notificacion INT,
        FOREIGN KEY (Id_Usuario) REFERENCES Usuario(Rut),
        FOREIGN KEY (Id_Servicio) REFERENCES Servicio(Id_Servicio),
        FOREIGN KEY (Id_Especialista) REFERENCES Especialista(Id_Especialista),
        FOREIGN KEY (Id_Citacion) REFERENCES Citacion(Id_Citacion),
        FOREIGN KEY (Id_Notificacion) REFERENCES Notificacion(Id_Notificacion)
      );
    `;

    client.query(createTablesQuery, (err, res) => {
      release();
      if (err) {
        console.error('Error ejecutando la consulta para crear tablas:', err.stack);
      } else {
        console.log('Tablas creadas/verificadas exitosamente');
      }
    });
  }
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Usuario');  // Cambié la tabla a 'Usuario'
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;


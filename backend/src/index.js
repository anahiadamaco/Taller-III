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
      -- Crear tabla Administrador primero
CREATE TABLE Administrador (
    Id_Administrador INT PRIMARY KEY,
    Correo_Municipal VARCHAR(64),
    Contraseña VARCHAR(255),
    Rut VARCHAR(15) UNIQUE
);

-- Crear tabla Via
CREATE TABLE Via (
    Id_Via INT PRIMARY KEY,
    Via VARCHAR(20)
);

-- Crear tabla Persona_Mayor
CREATE TABLE Persona_Mayor (
    Id_Usuario INT PRIMARY KEY,
    Condición VARCHAR(50),
    Movilidad BOOLEAN,
    Rut VARCHAR(15) UNIQUE
);

-- Crear tabla Servicio
CREATE TABLE Servicio (
    Id_Servicio INT PRIMARY KEY,
    Nombre_Servicio VARCHAR(20),
    Personal INT,
    Cupos INT,
    Id_Especialista INT
);

-- Crear tabla Especialista
CREATE TABLE Especialista (
    Id_Especialista INT PRIMARY KEY,
    Especialidad VARCHAR(20),
    Rut VARCHAR(15) UNIQUE
);

-- Crear tabla Horario
CREATE TABLE Horario (
    Id_Horario INT PRIMARY KEY,
    Fecha DATE,
    Hora_Inicio VARCHAR(5),
    Hora_Termino VARCHAR(5),
    Id_Especialista INT,
    CONSTRAINT FK_Horario_Especialista
      FOREIGN KEY (Id_Especialista)
        REFERENCES Especialista(Id_Especialista)
);

-- Crear tabla Notificacion antes de Historial
CREATE TABLE Notificacion (
    Id_Notificacion INT PRIMARY KEY,
    Hora_Envio VARCHAR(5),
    Fecha_Envio DATE,
    Mensaje VARCHAR(60),
    Id_Servicio INT,
    Id_Via INT,
    CONSTRAINT FK_Notificacion_Servicio
      FOREIGN KEY (Id_Servicio)
        REFERENCES Servicio(Id_Servicio),
    CONSTRAINT FK_Notificacion_Via
      FOREIGN KEY (Id_Via)
        REFERENCES Via(Id_Via)
);

-- Crear tabla Historial después de Notificacion
CREATE TABLE Historial (
    Id_Usuario INT,
    Id_Sevicio INT,
    Id_Especialista INT,
    Id_Citacion INT,
    Id_Notificacion INT,
    CONSTRAINT PK_Historial PRIMARY KEY (Id_Usuario, Id_Sevicio, Id_Especialista, Id_Citacion, Id_Notificacion),
    CONSTRAINT FK_Historial_Id_Sevicio
      FOREIGN KEY (Id_Sevicio)
        REFERENCES Servicio(Id_Servicio),
    CONSTRAINT FK_Historial_Id_Usuario
      FOREIGN KEY (Id_Usuario)
        REFERENCES Persona_Mayor(Id_Usuario),
    CONSTRAINT FK_Historial_Id_Notificacion
      FOREIGN KEY (Id_Notificacion)
        REFERENCES Notificacion(Id_Notificacion)
);

-- Crear tabla Citacion
CREATE TABLE Citacion (
    Id_Citacion INT PRIMARY KEY,
    Estado BOOLEAN,
    Id_Administrador INT,
    Id_Horario INT,
    Id_Usuario INT,
    CONSTRAINT FK_Citacion_Administrador
      FOREIGN KEY (Id_Administrador)
        REFERENCES Administrador(Id_Administrador),
    CONSTRAINT FK_Citacion_Usuario
      FOREIGN KEY (Id_Usuario)
        REFERENCES Persona_Mayor(Id_Usuario)
);

-- Crear índices
CREATE INDEX idx_administrador_rut ON Administrador (Rut);
CREATE INDEX idx_persona_mayor_rut ON Persona_Mayor (Rut);
CREATE INDEX idx_servicio_especialista ON Servicio (Id_Especialista);
CREATE INDEX idx_historial ON Historial (Id_Usuario, Id_Sevicio, Id_Especialista, Id_Citacion, Id_Notificacion);
CREATE INDEX idx_notificacion ON Notificacion (Id_Servicio, Id_Via);
CREATE INDEX idx_horario_especialista ON Horario (Id_Especialista);

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
    const result = await pool.query('SELECT * FROM Usuario');  // Cambié la tabla a Usuario
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



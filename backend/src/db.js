const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

// Configuración de la conexión
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const createTables = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS "Rol" (
  "rol" serial PRIMARY KEY,
  "nombre_rol" varchar(20)
);

CREATE TABLE IF NOT EXISTS "Usuario" (
  "rut" varchar(11) PRIMARY KEY,
  "nombre" varchar(20),
  "apellido_paterno" varchar(40),
  "apellido_materno" varchar(40),
  "correo" varchar(64),
  "telefono" int,
  "contraseña" varchar(256),
  "rol" serial,
  FOREIGN KEY ("rol") REFERENCES "Rol"("rol")
);

CREATE TABLE IF NOT EXISTS "Cita" (
  "id_cita" serial PRIMARY KEY,
  "reg_paciente" int,
  "id_hora" serial,
  "estado" varchar(20),
  "asistencia" boolean,
  "comentario" text,
  "cont_asistencia" boolean
);

CREATE TABLE IF NOT EXISTS "Notificacion" (
  "id_noti" serial PRIMARY KEY,
  "reg_prestador" int,
  "reg_paciente" int,
  "id_cita" int,
  "tipo_noti" varchar(10),
  "texto" text,
  "f_envio" timestamp,
  FOREIGN KEY ("id_cita") REFERENCES "Cita"("id_cita")
);

CREATE TABLE IF NOT EXISTS "Persona_Mayor" (
  "reg_paciente" serial PRIMARY KEY,
  "rut" Varchar(11),
  "f_nac" date,
  "direccion" varchar(40),
  "reg_soc_hogar" int,
  "mov_reducida" boolean,
  "cont_atenciones" int,
  FOREIGN KEY ("rut") REFERENCES "Usuario"("rut")
);

CREATE TABLE IF NOT EXISTS "Servicio" (
  "id_servicio" serial PRIMARY KEY,
  "nombre" varchar(20)
);

CREATE TABLE IF NOT EXISTS "Prestador_Servicio" (
  "reg_prestador" int PRIMARY KEY,
  "rut" varchar(11),
  "id_servicio" varchar(20),
  FOREIGN KEY ("rut") REFERENCES "Usuario"("rut")
);

CREATE TABLE IF NOT EXISTS "Horario" (
  "id_hora" serial PRIMARY KEY,
  "reg_prestador" int,
  "fecha_hora" timestamp,
  "disponible" boolean,
  FOREIGN KEY ("reg_prestador") REFERENCES "Prestador_Servicio"("reg_prestador")
);

CREATE TABLE IF NOT EXISTS "Form_Mov_Reducida" (
  "id_form" serial PRIMARY KEY,
  "reg_paciente" int,
  "tipo" varchar(20),
  "acompañante" boolean,
  FOREIGN KEY ("reg_paciente") REFERENCES "Persona_Mayor"("reg_paciente")
);
  `;

  try {
    // Ejecutar la consulta
    await pool.query(sql);
    console.log("Tablas creadas o existentes.");
  } catch (err) {
    console.error('Error creando las tablas:', err);
  }
};

const initializeDatabase = async () => {
  await createTables();
  // Aquí puedes agregar más funciones para insertar roles, datos de prueba, etc.
};

initializeDatabase();

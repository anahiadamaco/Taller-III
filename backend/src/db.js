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
      "apellidos" varchar(40),
      "correo" varchar(64),
      "telefono" int,
      "contraseña" varchar(255),
      "rol" int,
      FOREIGN KEY ("rol") REFERENCES "Rol"("rol")
    );

    CREATE TABLE IF NOT EXISTS "Persona_Mayor" (
      "reg_paciente" int PRIMARY KEY,
      "rut" varchar(11),
      "f_nac" date,
      "direccion" varchar(40),
      "reg_soc_hogar" int,
      "mov_reducida" boolean,
      "cont_atenciones" int,
      FOREIGN KEY ("rut") REFERENCES "Usuario"("rut")
    );

    CREATE TABLE IF NOT EXISTS "Prestador_Servicio" (
      "reg_prestrador" int PRIMARY KEY,
      "rut" varchar(11),
      "id_servicio" varchar(20),
      FOREIGN KEY ("rut") REFERENCES "Usuario"("rut")
    );

    CREATE TABLE IF NOT EXISTS "Horario" (
      "id_hora" serial PRIMARY KEY,
      "reg_prestador" int,
      "fecha_hora" timestamp,
      "disponible" boolean,
      FOREIGN KEY ("reg_prestador") REFERENCES "Prestador_Servicio"("reg_prestrador")
    );

    CREATE TABLE IF NOT EXISTS "Cita" (
      "id_cita" serial PRIMARY KEY,
      "reg_paciente" int,
      "id_hora" int,
      "estado" varchar(20),
      "asistencia" boolean,
      "comentario" text,
      "cont_asistencia" boolean,
      FOREIGN KEY ("reg_paciente") REFERENCES "Persona_Mayor"("reg_paciente"),
      FOREIGN KEY ("id_hora") REFERENCES "Horario"("id_hora")
    );

    CREATE TABLE IF NOT EXISTS "Notificacion" (
      "id_noti" serial PRIMARY KEY,
      "reg_prestador" int,
      "reg_paciente" int,
      "id_cita" int,
      "tipo_noti" varchar(10),
      "texto" text,
      "f_envio" timestamp,
      FOREIGN KEY ("id_cita") REFERENCES "Cita"("id_cita"),
      FOREIGN KEY ("reg_paciente") REFERENCES "Persona_Mayor"("reg_paciente"),
      FOREIGN KEY ("reg_prestador") REFERENCES "Prestador_Servicio"("reg_prestrador")
    );

    CREATE TABLE IF NOT EXISTS "Report_Estadisticas" (
      "id_reporte" serial PRIMARY KEY,
      "id_cita" int,
      "cant_atenciones" int,
      FOREIGN KEY ("id_cita") REFERENCES "Cita"("id_cita")
    );

    CREATE TABLE IF NOT EXISTS "Form_Mov_Reducida" (
      "mov_reducida" boolean,
      "tipo" varchar(20),
      "acompañante" boolean,
      PRIMARY KEY ("mov_reducida")
    );
  `;

  try {
    await pool.query(sql);
    console.log('Tablas creadas correctamente');
  } catch (err) {
    console.error('Error creando tablas:', err);
  } finally {
    pool.end();
  }
};

createTables();



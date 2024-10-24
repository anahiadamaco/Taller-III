-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE "Cita_id_cita_seq";

CREATE SEQUENCE "Cita_id_cita_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Cita_id_hora_seq";

CREATE SEQUENCE "Cita_id_hora_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Form_Mov_Reducida_id_form_seq";

CREATE SEQUENCE "Form_Mov_Reducida_id_form_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Horario_id_hora_seq";

CREATE SEQUENCE "Horario_id_hora_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Notificacion_id_noti_seq";

CREATE SEQUENCE "Notificacion_id_noti_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Persona_Mayor_reg_paciente_seq";

CREATE SEQUENCE "Persona_Mayor_reg_paciente_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Rol_rol_seq";

CREATE SEQUENCE "Rol_rol_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE "Usuario_rol_seq";

CREATE SEQUENCE "Usuario_rol_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE servicio_id_servicio_seq;

CREATE SEQUENCE servicio_id_servicio_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public."Cita" definition

-- Drop table

-- DROP TABLE "Cita";

CREATE TABLE "Cita" (
	id_cita serial4 NOT NULL,
	reg_paciente int4 NULL,
	id_hora serial4 NOT NULL,
	estado varchar(20) NULL,
	asistencia bool NULL,
	comentario text NULL,
	cont_asistencia bool NULL,
	CONSTRAINT "Cita_pkey" PRIMARY KEY (id_cita)
);


-- public."Rol" definition

-- Drop table

-- DROP TABLE "Rol";

CREATE TABLE "Rol" (
	rol serial4 NOT NULL,
	nombre_rol varchar(20) NULL,
	CONSTRAINT "Rol_pkey" PRIMARY KEY (rol)
);


-- public.servicio definition

-- Drop table

-- DROP TABLE servicio;

CREATE TABLE servicio (
	id_servicio serial4 NOT NULL,
	nombre_servicio varchar(100) NOT NULL,
	CONSTRAINT servicio_pkey PRIMARY KEY (id_servicio)
);


-- public."Notificacion" definition

-- Drop table

-- DROP TABLE "Notificacion";

CREATE TABLE "Notificacion" (
	id_noti serial4 NOT NULL,
	reg_prestador int4 NULL,
	reg_paciente int4 NULL,
	id_cita int4 NULL,
	tipo_noti varchar(10) NULL,
	texto text NULL,
	f_envio timestamp NULL,
	CONSTRAINT "Notificacion_pkey" PRIMARY KEY (id_noti),
	CONSTRAINT "Notificacion_id_cita_fkey" FOREIGN KEY (id_cita) REFERENCES "Cita"(id_cita)
);


-- public."Usuario" definition

-- Drop table

-- DROP TABLE "Usuario";

CREATE TABLE "Usuario" (
	rut varchar(11) NOT NULL,
	nombre varchar(20) NULL,
	apellido_paterno varchar(40) NULL,
	apellido_materno varchar(40) NULL,
	correo varchar(64) NULL,
	telefono int4 NULL,
	contrasena varchar(256) NULL,
	rol serial4 NOT NULL,
	CONSTRAINT "Usuario_pkey" PRIMARY KEY (rut),
	CONSTRAINT "Usuario_rol_fkey" FOREIGN KEY (rol) REFERENCES "Rol"(rol)
);


-- public."Persona_Mayor" definition

-- Drop table

-- DROP TABLE "Persona_Mayor";

CREATE TABLE "Persona_Mayor" (
	reg_paciente serial4 NOT NULL,
	rut varchar(11) NULL,
	f_nac date NULL,
	direccion varchar(40) NULL,
	reg_soc_hogar int4 NULL,
	mov_reducida bool NULL,
	cont_atenciones int4 NULL,
	CONSTRAINT "Persona_Mayor_pkey" PRIMARY KEY (reg_paciente),
	CONSTRAINT "Persona_Mayor_rut_fkey" FOREIGN KEY (rut) REFERENCES "Usuario"(rut)
);


-- public."Prestador_Servicio" definition

-- Drop table

-- DROP TABLE "Prestador_Servicio";

CREATE TABLE "Prestador_Servicio" (
	reg_prestador int4 NOT NULL,
	rut varchar(11) NULL,
	id_servicio int4 NULL,
	CONSTRAINT "Prestador_Servicio_pkey" PRIMARY KEY (reg_prestador),
	CONSTRAINT "Prestador_Servicio_rut_fkey" FOREIGN KEY (rut) REFERENCES "Usuario"(rut),
	CONSTRAINT fk_servicio FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON DELETE CASCADE
);


-- public."Form_Mov_Reducida" definition

-- Drop table

-- DROP TABLE "Form_Mov_Reducida";

CREATE TABLE "Form_Mov_Reducida" (
	id_form serial4 NOT NULL,
	reg_paciente int4 NULL,
	tipo varchar(20) NULL,
	acompañante bool NULL,
	CONSTRAINT "Form_Mov_Reducida_pkey" PRIMARY KEY (id_form),
	CONSTRAINT "Form_Mov_Reducida_reg_paciente_fkey" FOREIGN KEY (reg_paciente) REFERENCES "Persona_Mayor"(reg_paciente)
);


-- public."Horario" definition

-- Drop table

-- DROP TABLE "Horario";

CREATE TABLE "Horario" (
	id_hora serial4 NOT NULL,
	reg_prestador int4 NULL,
	fecha_hora timestamp NULL,
	disponible bool NULL,
	CONSTRAINT "Horario_pkey" PRIMARY KEY (id_hora),
	CONSTRAINT "Horario_reg_prestador_fkey" FOREIGN KEY (reg_prestador) REFERENCES "Prestador_Servicio"(reg_prestador)
);
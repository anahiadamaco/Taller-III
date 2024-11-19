PostgreSQL es un sistema de bases de datos de código abierto libre que 
soporta tanto relacionales (SQL) como no relacional (JSON) 

 Gestiona la concurrencia de manera eficiente mediante el uso de MVCC (Control de concurrencia de 
 múltiples variantes). En la práctica,esto significa que las lecturas no bloquean 
 las escrituras y las escrituras no bloquean las lecturas.



 SE MOSTRARA EL USO DE LA APLICACION PGADMIN4
 -UNA VEZ INSTALADA ,AL INGRESAR PEDIRA LA CREACION UNA CONTRASEÑA LOCAL
 -SE MUESTRA AL LAO IZQUIERDO LAS BASES DE datos
 -DONDE DICE DATABASES,CLICK DERECO Y CREAR UNA BASES
 


 DONDE REALIZAR CONSULTAR(QUERY TOOL)
 PARA CREAR UNA TABLA:
 CREATE TABLE cars (
  brand VARCHAR(255),
  model VARCHAR(255),
  year INT
); 

MOSTRAR LA TABLA
SELECT * FROM cars; 

PARA INSERTAR
 INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964); 

PARA ACTUALIZAR
 INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964); 

PARA ELIMINAR
 DELETE FROM cars
WHERE brand = 'Volvo'; 
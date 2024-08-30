# https://www.postgresql.org/
# https://www.postgresql.org/docs/current/

# 15 minutos de investigacion (29-08, 22:45 - 23:00)
- Base de datos relacional de objetos
- Gratuito y de codigo abierto
- Reputacion solida por su arquitectura probada, fiabilidad, integridad de datos, entre otras
- Funciona en sistemas operativos como Linux, Windows, MacOS, BSD, Solaris
- Incluye funciones destinadas a ayudar a desarrolladores a crear aplicaciones, a administradores a proteger integridad de datos y crear entornos tolerantes a fallas, y gestionar datos sin importar el tamaño del conjunto de datos
- Cumple al menos 170 de las 179 caracteristicas obligatorias para la conformidad con SQL:2023 Core
- Es altamente escalable 

# 15 minutos de investigacion (29-08, 23:30 - 23:45)
- Convenciones:
- Los corchetes "[ ]" indican partes opcionales
- Las llaves "{ }" y las lineas verticales "|" indican que debe elegir una alternativa
- Los puntos "..." significan que el elemento anterior se puede repetir
- Todos los demás simbolos, incluidos los parentesis se deben tomar de forma literal
- Los comandos SQL estan precedidos por el simbolo del sistema =>
- Los comandos de shell estan precedidos por el simbolo del sistema $
- Comandos Sql y de shell normalmente no se muestran los simbolos del sistema

- Utiliza un modelo cliente/servidor
- Un proceso de servidor: Administra los archivos de la base de datos, acepta conexiones a la base de datos desde aplicaciones cliente y realiza acciones de base de datos en nombre de los clientes. El programa de servidor de base de datos se denomina postgres
- La aplicacion cliente (frontend) del usuario que desea realizar operaciones con la base de datos. Las aplicaciones cliente pueden ser de naturaleza muy diversa: un cliente puede ser una herramienta orientada a texto, una aplicación grafica, un servidor web que accede a la base de datos para mostrar paginas web o una herramienta especializada de mantenimiento de bases de datos
- El cliente y el servidor pueden estar en hosts diferentes comunicandose a traves de una conexion de red TCP/IP
- El servidor PostgreSQL puede gestionar multiples conexiones concurrentes de clientes, para lograrlo, se inicia “bifurca” un nuevo proceso para cada conexion

# 15 minutos de investigacion (30-08, 10:35 - 10:50)
- Crear una base de datos: $ createdb [nombrebd]
- Eliminar una base de datos: $ dropdb [nombrebd]
- Ejecutar el programa de terminal interactivo permite ingresar, editar y ejecutar comandos SQL de forma interactiva: $ psql [nombrebd]
- Superusuario de la base de datos (ultima linea del comando anterior): mibd=> o mibd=#
- Para obtener ayuda sobre la sintaxis de varios comandos SQL: mydb=> \h
- Para salir de psql: mydb=> \q
- Para crear scripts y compilar los archivos C que contienen funciones y tipos definidos por el usuario: $ make
- El comando \i lee comandos del archivo especificado: mydb=> \i basics.sql
- Coloca en modo de un solo paso que hace una pausa antes de enviar cada instrucción al servidor: psql's -s
- Para crear una nueva tabla especificando el nombre de la tabla, junto con todos los nombres de columnas y sus tipos:
        CREAR TABLA clima (
            ciudad     varchar(80),
            temp_lo    int,             -- temperatura baja
            temp_hi    int,             -- temperatura alta
            prcp       real,            -- precipitacion
            fecha      date
        );
- psql reconoce que el comando no termina hasta que aparezca el punto y coma
- Los espacios en blanco, tabulaciones y nuevas líneas se pueden utilizar libremente en los comandos SQL
- Dos guiones “--” introducen comentarios
- SQL no distingue entre mayusculas y minusculas en lo que respecta a las palabras clave y los identificadores, excepto cuando los identificadores se escriben entre comillas dobles para preservar las mayusculas y minusculas
- Los nombres de los tipos no son palabras clave en la sintaxis, excepto cuando se requiere admitir casos especiales en el estandar SQL
- point es un tipo de dato especifico de PostgreSQL
- Para recrear una tabla o eliminarla: DROP TABLE [NombreTabla];
- INSERT se utiliza para rellenar una tabla con filas: INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');

# 15 minutos de investigacion (30-08, 12:20 - 12:35)
- Existen agregaciones para calcular count, sum, avg(promedio), max(maximo) y min(minimo) en un conjunto de filas
- Los agregados tambien son muy utiles en combinación con GROUP BY
- Podemos filtrar estas filas agrupadas mediante HAVING
- Puede actualizar las filas existentes mediante UPDATE
- Se pueden eliminar filas de una tabla mediante DELETE
- El punto esencial de una transaccion es que agrupa multiples pasos en una unica operacion de todo o nada

# Conclusión:
- En base a mi investigación, me parece una muy buena opción trabajar con este sistema de base de datos, ademas de que me parecio facil de usar y aborda lo solicitado en este proyecto
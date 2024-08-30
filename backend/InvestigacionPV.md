# https://www.postgresql.org/
# https://www.postgresql.org/docs/current/

# 15 minutos de investigacion (22:45 - 23:00)
- Base de datos relacional de objetos
- Gratuito y de codigo abierto
- Reputacion solida por su arquitectura probada, fiabilidad, integridad de datos, entre otras
- Funciona en sistemas operativos como Linux, Windows, MacOS, BSD, Solaris
- Incluye funciones destinadas a ayudar a desarrolladores a crear aplicaciones, a administradores a proteger integridad de datos y crear entornos tolerantes a fallas, y gestionar datos sin importar el tamaño del conjunto de datos
- Cumple al menos 170 de las 179 caracteristicas obligatorias para la conformidad con SQL:2023 Core
- Es altamente escalable 

# 15 minutos de investigacion (23:30 - 23:45)
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

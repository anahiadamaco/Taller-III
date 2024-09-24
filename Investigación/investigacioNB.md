https://www.postgresql.org/docs/current/index.html


Investigación sobre PostgreSQL
Descripción General
PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos (ORDBMS) de código abierto, basado en el sistema original POSTGRES desarrollado en la Universidad de California en Berkeley. Se destaca por su arquitectura sólida, integridad de datos, y soporte para una amplia gama de características modernas como consultas complejas, claves foráneas, disparadores, vistas actualizables y control de concurrencia multiversión (MVCC)​(
PostgreSQL
).

Características Clave
Código Abierto y Extensible: PostgreSQL permite la extensión mediante la adición de nuevos tipos de datos, funciones, operadores, y lenguajes procedurales. Esto facilita la personalización según las necesidades específicas del usuario.
Conformidad con SQL: Soporta una gran parte del estándar SQL, incluyendo funcionalidades avanzadas como integridad transaccional, lo que lo hace altamente adecuado para aplicaciones críticas.
Escalabilidad: Se adapta bien a sistemas de pequeña y gran escala, permitiendo desde simples aplicaciones hasta grandes sistemas de almacenamiento de datos​.
Funcionalidades y Operaciones Básicas
Creación y Manejo de Bases de Datos: Comandos básicos como createdb para crear una base de datos y dropdb para eliminarla facilitan la administración inicial. Para interacciones más detalladas, se usa la herramienta psql, un terminal interactivo donde se pueden ejecutar comandos SQL y administrar datos.
Consultas y Manipulación de Datos: Permite operaciones como SELECT, INSERT, UPDATE y DELETE. Las funciones de agregación (COUNT, SUM, AVG, etc.) se combinan frecuentemente con GROUP BY y HAVING para análisis complejos de datos.
Gestión de Tablas: Creación de tablas con definiciones de columnas detalladas, incluyendo tipos de datos como varchar, int, real, y soporte para tipos específicos de PostgreSQL como point. Admite la eliminación y modificación de tablas con comandos como DROP TABLE y ALTER TABLE​.
Modelo de Cliente/Servidor
Arquitectura: Utiliza un modelo cliente/servidor donde el servidor (backend) administra los archivos de la base de datos, acepta conexiones y realiza las acciones solicitadas por los clientes. Estos clientes pueden ser aplicaciones orientadas a texto, herramientas gráficas, servidores web, o herramientas especializadas de mantenimiento de bases de datos.
Conexiones Concurrentes: El servidor PostgreSQL gestiona múltiples conexiones concurrentes bifurcando un nuevo proceso por cada conexión, lo que permite una alta concurrencia y rendimiento.
Conclusión
En la investigación de PostgreSQL, vi que su sistema de base de datos es conocido por tener una arquitectura sólida y una capacidad para manejar datos de manera confiable, también que es una herramienta de código abierto que ofrece gran flexibilidad y permite personalizar. Además se destaca por cumplir los estándares de SQL lo que nos asegura que mantenga una integridad y consistencia en las transacciones. El modelo de cliente/servidor se gestiona eficientemente gracias a las múltiples conexiones al mismo tiempo, ya que crea procesos individuales en cada conexión
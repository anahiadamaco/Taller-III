require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, // nombre de la base de datos
    process.env.DB_USER, // usuario correcto (debería ser "postgres")
    process.env.DB_PASSWORD, // contraseña correcta
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT
    }
);

module.exports = sequelize;
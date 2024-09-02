const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

module.exports = sequelize;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL con Sequelize');
  })
  .catch(err => {
    console.error('Error al conectar a PostgreSQL con Sequelize:', err);
  });
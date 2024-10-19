const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT
    }
);

// Definición del modelo
const User = sequelize.define('User', {
  rut: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Asegúrate de que el RUT sea único
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false, // 1 (Admin), 2 (Prestador de Servicio), 3 (Persona Mayor)
  },
});

// Sincroniza el modelo con la base de datos
(async () => {
  await sequelize.sync();
})();

module.exports = User;
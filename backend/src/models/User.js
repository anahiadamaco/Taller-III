const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'postgres',
});

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
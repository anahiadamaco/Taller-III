const pool = require('../db');
const bcrypt = require('bcrypt'); 

// Registro de usuario
const registerUser = async (req, res) => {
    const { rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, email, contrasena, celular } = req.body;

    // Validar datos de entrada
    if (!email || !contrasena || !celular || !rut || !nombre || !apellido_paterno || apellido_materno || !fechaNacimiento) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Verifica si existe un Usuario con el mismo correo
        const existingUser = await pool.query('SELECT * FROM Usuario WHERE correo = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Verifica si el RUT está registrado
        const existingRut = await pool.query('SELECT * FROM Usuario WHERE rut = $1', [rut]);
        if (existingRut.rows.length > 0) {
            return res.status(400).json({ error: 'El RUT ya está registrado' });
        }

        // Hash de la contrasena
        const hashedPassword = await bcrypt.hash(contrasena, 10); // Hash con un salt de 10 rondas

        // Inserta el nuevo Usuario
        const newUser = await pool.query(
            'INSERT INTO Usuario (rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, correo, contrasena, celular) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, email, hashedPassword, celular]
        );

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser.rows[0] });

    } catch (err) {
        console.error('Error al registrar el Usuario:', err); // Mensaje de error más específico
        res.status(500).json({ message: 'Error al registrar el Usuario' });
    }
};
//Registro
exports.registerPM = async (req, res) => {
    const { rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, celular, correo, contraseña } = req.body;
  
    try {
      // Lógica para registrar a la persona mayor en la base de datos
      // Suponiendo que tienes un modelo de PersonaMayor
      const nuevaPersonaMayor = await PersonaMayor.create({
        rut,
        nombre,
        apellido_paterno,
        apellido_materno,   
        fecha_nacimiento: fechaNacimiento,
        celular,
        correo,
        contraseña,
      });
  
      res.status(201).json({ message: 'Registro exitoso', personaMayor: nuevaPersonaMayor });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar la persona mayor' });
    }
  };

  
// Login
const loginUser = async (req, res) => {
    const { rut, contrasena } = req.body;

    try {
        // Verificación de si existe un Usuario
        const user = await pool.query('SELECT * FROM Usuario WHERE rut = $1', [rut]); // Asegúrate que el nombre de tabla es correcto
        if (user.rows.length === 0) {
            return res.status(400).json({ error: 'RUT o contraseña incorrectos' });
        }

        const validPassword = await bcrypt.compare(contrasena, user.rows[0].contrasena);
        if (!validPassword) {
            return res.status(400).json({ error: 'RUT o contraseña incorrectos' });
        }

        // Si se encuentran las credenciales correctas
        res.status(200).json({ message: 'Login exitoso', user: user.rows[0] });
    } catch (err) {
        console.error('Error iniciando sesión:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
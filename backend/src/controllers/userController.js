const pool = require('../db');
const bcrypt = require('bcrypt'); 

const registerUser = async (req, res) => {
    const { rut, nombre, apellidos, fechaNacimiento, email, contraseña, celular} = req.body;

    // Validar datos de entrada
    if (!email || !contraseña || !celular || !rut || !nombre || !apellidos || !fechaNacimiento) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Verifica si existe un usuario con el mismo correo
        const existingUser = await pool.query('SELECT * FROM usuario WHERE correo = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Verifica si el RUT está registrado
        const existingRut = await pool.query('SELECT * FROM usuario WHERE rut = $1', [rut]);
        if (existingRut.rows.length > 0) {
            return res.status(400).json({ error: 'El RUT ya está registrado' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10); // Hash con un salt de 10 rondas

        // Inserta el nuevo usuario
        const newUser = await pool.query(
            'INSERT INTO usuario (rut, nombre, apellidos, fechaNacimiento, correo, contraseña, celular) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [rut, nombre, apellidos, fechaNacimiento, email, hashedPassword, celular]
        );

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser.rows[0] });

    } catch (err) {
        console.error('Error al registrar el usuario:', err.message); // Mensaje de error más específico
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};


//Login

const loginUser = async (req, res) => {
    const { rut, contraseña } = req.body;

    try {
        // Verificación de si existe un usuario
        const user = await pool.query('SELECT * FROM usuario WHERE rut = $1 AND contraseña = $2', [rut, contraseña]);
        if (user.rows.length === 0) {
          return res.status(400).json({ error: 'rut o contraseña incorrectos' });
        }

        const validPassword = await bcrypt.compare(contraseña, user.rows[0].contraseña);
        if (!validPassword) {
            return res.status(400).json({ error: 'rut o contraseña incorrectos' });

        
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



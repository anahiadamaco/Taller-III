const pool = require('../db');


const registerUser = async (req, res) => {
    const {correo, contraseña, celular, rut} = req.body;

    try {
        //Verifica si existe un usuario con el mismo correo
        const existingUser = await pool.query('SELECT * FROM Usuario WHERE correo = $1', [correo]);
        if (existingUser.rows.length > 0) {
          return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        //verifica si el ru ta registrado
        const existingRut = await pool.query('SELECT * FROM Usuario WHERE rut = $1', [rut]);
        if (existingRut.rows.length > 0) {
          return res.status(400).json({ error: 'El RUT ya está registrado' });
        }
        
        const newUser = await pool.query(
            'INSERT INTO Usuario (correo, contraseña, celular, rut) VALUES ($1, $2, $3, $4) RETURNING *',
            [correo, contraseña, celular, rut]
        );
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser.rows[0] });

    }catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

//Login

const loginUser = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        // Verificación de si existe un usuario
        const user = await pool.query('SELECT * FROM Usuario WHERE correo = $1 AND contraseña = $2', [correo, contraseña]);
        if (user.rows.length === 0) {
          return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const validPassword = await bcrypt.compare(contraseña, user.rows[0].contraseña);
        if (!validPassword) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });

        
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



const User = require('../models/User');
const bcrypt = require('bcrypt');


const loginUser = async (req, res) => {
    const { rut, contrasena } = req.body;

    try {
        // Verificación de si existe un Usuario por el RUT
        const user = await User.findOne({ where: { rut } });

        // Si el usuario no existe
        if (!user) {
            return res.status(400).json({ error: 'RUT o contraseña incorrectos' });
        }

        // Comparar la contraseña con bcrypt
        const validPassword = await bcrypt.compare(contrasena, user.contrasena);

        // Si la contraseña no es válida
        if (!validPassword) {
            return res.status(400).json({ error: 'RUT o contraseña incorrectos' });
        }

        // Si las credenciales son correctas
        res.status(200).json({ message: 'Login exitoso', user: { rut } });
    } catch (err) {
        console.error('Error iniciando sesión:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

module.exports = {loginUser};
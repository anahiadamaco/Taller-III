const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registro
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

//(no se si hay ID en los parametros pero esta vaina es para obtener el perfil de un usuario)
router.get('/profile/:id', userController.getUserProfile);

module.exports = router;

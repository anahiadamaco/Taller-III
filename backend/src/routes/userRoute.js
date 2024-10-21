const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/loginUser'); // Asegúrate de que la ruta sea correcta
const cors = require('cors');

router.use(cors());
router.use(express.json());

// Define la ruta de inicio de sesión
router.post('/login', loginUser); // Utiliza la función loginUser aquí

module.exports = router;



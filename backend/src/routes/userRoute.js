const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Registro
router.post('/registerPM', userController.registerUser);

// Login
router.post('/login', userController.loginUser);


module.exports = router;

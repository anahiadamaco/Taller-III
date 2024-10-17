const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Registro
router.post('/api/registerPM', userController.registerUser);

// Login
router.post('/api/login', userController.loginUser);


module.exports = router;

const express = require('express');
const router = express.Router();
const { AtencionesMensuales } = require('../controllers/graficosController');

// Obtener las atenciones mensuales
router.get('/AtMen', AtencionesMensuales);

module.exports = router;

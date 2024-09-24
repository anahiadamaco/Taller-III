const express = require('express');
const router = express.Router();
const { getCitas, createCita, updateCita } = require('../controllers/citasController');

// Rutas de citas
router.get('/', getCitas);       
router.post('/', createCita);
router.put('/:id', updateCita);     

module.exports = router;

const express = require('express');
const router = express.Router();
const { getCitas, createCita, updateCita, cancelCita } = require('../controllers/citasController');

// Rutas de citas
router.get('/', getCitas);
router.post('/', createCita);
router.put('/:id', updateCita);
router.delete('/:id', cancelCita);

module.exports = router;
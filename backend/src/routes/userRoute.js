const express = require('express');
const router = express.Router();
const {loginUser} = require('../controllers/loginUser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

// Asegúrate de que esta ruta esté correctamente definida
app.post('/login', loginUser);


module.exports = router;

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto localhost:3000');
});


const express = require('express');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.log('Error: ' + err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

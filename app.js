// Imports
const cors = require('cors');
const morgan = require('morgan')
const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, 'public')));

// Routes


// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server

app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
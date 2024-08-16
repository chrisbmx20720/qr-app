const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const bodyParser = require('express').urlencoded({ extended: false });
const indexRouter = require('../routes/index');

const app = express();

// Configuración para servir vistas directamente desde la carpeta views
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para manejar formularios
app.use(bodyParser);

// Middleware para manejar las rutas
app.use('/', indexRouter);

// Manejo de errores
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Exportar como función serverless
module.exports.handler = serverless(app);

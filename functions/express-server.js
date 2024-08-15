const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const qr = require('qrcode');

const app = express();

// Configurar EJS como el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: false }));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { qrCodeImage: null });
});

// Ruta para generar el código QR
app.post('/', async (req, res) => {
  const url = req.body.url;
  if (!url) {
    return res.render('index', { qrCodeImage: null });
  }

  try {
    const qrCodeImage = await qr.toDataURL(url);
    res.render('index', { qrCodeImage });
  } catch (err) {
    console.error(err);
    res.send('Error occurred');
  }
});

// Exportar como función serverless
module.exports.handler = serverless(app);

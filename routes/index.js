const express = require('express');
const router = express.Router();
const qr = require('qrcode');

// Ruta principal
router.get('/', (req, res) => {
  res.render('index', { qrCodeImage: null });
});

// Ruta para generar el código QR
router.post('/', async (req, res) => {
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

module.exports = router;

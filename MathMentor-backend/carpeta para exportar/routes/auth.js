const express = require('express');
const router = express.Router();

// Ruta temporal para probar
router.get('/', (req, res) => {
  res.send('Ruta de autenticación funcionando 🔐');
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MathMentor Backend funcionando 🎓');
});

app.use('/api/auth', require('./routes/auth'));

module.exports = app;

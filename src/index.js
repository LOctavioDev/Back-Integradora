import app from './app.js';

import mongoose from './database.js';

app.get('/', (req, res) => {
  res.send('first');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 1000; // pakai port dari Render

app.get('/', (req, res) => {
  res.send('Halo dari server kost!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

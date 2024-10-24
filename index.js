const express = require('express');
const app = express();
const port = 3000;

// Primeira Rota
app.get('/primeira', (req, res) => {
  res.send('<h1>Bem-vindo à Primeira Rota!</h1>');
});

// Segunda rota
app.get('/segunda', (req, res) => {
  res.send('<h1>Bem-vindo à Segunda Rota!</h1>');
});

// Terceira rota
app.get('/terceira', (req, res) => {
  res.send('<h1>Bem-vindo à terceira rota!</h1>');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
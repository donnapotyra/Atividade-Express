// importando o express para a aplicação. Maiores explicação no final do arquivo
const express = require("express");

// iniciando a aplicação com a função express()
const app = express();


app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.get("/casa", (req, res) => {
  res.send("Casa para venda");
});


app.post("/casa", (req, res) => {
  res.send("Casa com 2 quartos, cozinha, 2 banheiros, sala de estar e garagem");
});

app.put("/casa", (req, res) => {
  res.send("Casa vendida");

});

app.delete("/casa", (req, res) => {
  res.send("Casa vendida - delete");

});

const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));

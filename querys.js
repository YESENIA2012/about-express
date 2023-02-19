//colocando el signos ? es un query o una consulta, estas consultas son informacion extra que el navegador envia al backend

const express = require("express");
const app = express();

//http://localhost:3000/hello/yesenia?name=yesenia&age=30 url de la consulta, query es un objeto
app.get("/hello/:username", (req, res) => {
  console.log(req.query);
  res.send(`esta es el nombre ${req.query.name} y la edad ${req.query.age}`);
});

app.get("/search", (req, res) => {
  if (req.query.q === "javascript") {
    res.send("Lista de libros de javascript");
  } else {
    res.send("Página normal");
  }
});

app.listen(3000);
console.log(`server on port ${3000}`);

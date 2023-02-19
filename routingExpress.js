//Esta es una forma ce crear rutas con express, routing
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./static/index.html", {
    root: __dirname,
  });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("The current weather is Nice");
});

app.use((req, res) => {
  //Esto va a salir siempre que coloquemos una ruta que no existe
  res.status(404).send("No se encontró la ruta");
});

app.listen(3000);
console.log(`server on port ${3000}`);

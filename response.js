//Puedo responder a una petición con archivos, objetos json, etc

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

//__dirname nos dice donde esta ese archivo, la ruta inicial
app.get("/myFile", (req, res) => {
  res.sendFile("./img.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Zaina",
    lastName: "González",
    age: 28,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "some street 123",
    },
  });
});

//Como saber si el servidor esta funcionando
app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000);
console.log(`server on port ${3000}`);

//CRUD -> CREAR, ACTUALIZAR, LISTAR, ELIMINAR (CREATE, READ, UPDATE, DELETE)
//Las url solo funcionan con peticiones GET

const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  //acá puedo colocar lògica, como hacer consultas a una base de datos, procesar data, validar data
  res.send("Lista de productos");
});

app.post("/products", (req, res) => {
  res.send("Creando productos");
});

app.put("/products", (req, res) => {
  res.send("Actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("Eliminando productos");
});

app.patch("/products", (req, res) => {
  res.send("Actualizando una parte de los productos");
});

//usakndo el metodo all, estoy diciendo que esa petición sirve con todos los metodos get, post, put, delete, patch

app.all("/info", (req, res) => {
  res.send("server info");
});

app.listen(3000);
console.log(`server on port ${3000}`);

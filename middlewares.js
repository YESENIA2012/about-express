/*Middlewares
con next indicamos que ya acabamos en una función
*/
// middleweare es una funcion que permite que antes de que lleguemos a una ruta ejecutemos lógica
//Los middleweares siempre deben tener una function next

const express = require("express");
const app = express();

app.use((req, res, next) => {
  //aca me dice que rita visito y el metodo que uso
  console.log(`Route: ${req.url} Metodo: ${req.method}`);
  next(); //le pasamos esta funcion para que pase a la siguiente sentencia, si no el navegador se queda cargando
});

app.use((req, res, next) => {
  if (req.query.login === "yezze@gmail.com") {
    next();
  } else {
    res.send("User no autorizado");
  }
});

//todas las rutas que esten despues de estas dos funciones tienen que tener el usuario para que puedan ser vistas

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

//pero si quiero que estas rutas sean visitadas sin necesdad de autenticarse, solo las muevo antes del middleweare que tiene el login
app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000);
console.log(`server on port ${3000}`);

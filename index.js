//Protocolo http nos permite comunicar cliente y servidor, el clinete hace una petición (request) y el usuario da una respuesta (response)
//ejs permite procesar archivos html

const express = require("express");
const app = express();
const ejs = require("ejs");
const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

//cuando hacemos esto, podemos acceder a todos los archivos que estén dento del archivo static, como el css, html y js
/* app.use(express.static("./static")); */
//si tengo una ruta con el mismo nombre de un archivo dentro de static, me va a mostrar lo que hay dentro del archivo y no la ruta, ya que este middlewear esta primero
//pero si quiero que accesa a la ruta y al archivo entonces hago lo siguiente

app.get("/note.txt", (req, res) => {
  res.send("Esto no es un archivo");
});

HomeRoutes(app);
app.use(UserRoutes);

//casi siempre están en la ultima parte del codigo
app.use("/static", express.static("./static")); // pero antes de visitar la ruta del archivo debo color la ruta /static

app.listen(3000);
console.log(`server ${app.get("appName")} on port ${3000}`);

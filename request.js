//Protocolo http nos permite comunicar cliente y servidor, el clinete hace una petición (request) y el usuario da una respuesta (response)

const express = require("express");
const app = express();

/*request es un objeto condormado por un endpoint, header y un body
endpoint - titulo - url
header - mas informacion de los datos que estoy enviado y del formato que tiene
body - conteinido - objeto json
*/
//post se usa cuando el cliente va a enviar datos
//req.body permite ver el contenido de lo que esta enviando el cliente

app.use(express.text()); // estos metodos se deben colocar antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //entienden los datos que vienen desde un formulario

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

// esta es la forma de extraer parámetros de la url
app.get("/hello/:username", (req, res) => {
  console.log(req.params.username);
  res.send(`Hello ${req.params.username}`);
});

app.get("/add/:x/:y", (req, res) => {
  // const result = parseInt(req.params.x) + parseInt(req.params.y); esta es una forma de extraer los parámetros
  console.log(req.params.x);
  console.log(req.params.y);

  const { x, y } = req.params; // esta es otra forma de extraer parametros
  const result = parseInt(x) + parseInt(y);
  res.send(`Result: ${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "yese") {
    // este return hace que salga de la función para que no pase al otro res.send
    return res.sendFile("./img.png", {
      root: __dirname,
    });
  }

  res.send("El usuario no tiene acceso");
});

//usando los dos puntos, el navegador puede guardar ese valor en la variable name, lo guarda como in objeto
app.get("/name/:name/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`server on port ${3000}`);

//request parametros, como extraer los datos tipiados de una url ->  parametros son valores que pueden ir cambiando

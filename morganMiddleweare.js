const morgan = require("morgan");
const express = require("express");
const app = express();

//con esto me no tengo que hacer esto (req, res, next) => {} como en el otro middleweare
//Hay varias clases de middleweares en internet, solo es buscar

app.use(morgan("dev"));

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.get("/abour", (req, res) => {
  res.send("About page");
});

app.listen(3000);
console.log(`server on port ${3000}`);

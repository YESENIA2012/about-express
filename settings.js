const express = require("express");
const app = express();

//primero van los settings
app.set("appName", "Express curse");
app.set("port", 3000);
app.set("case sensitive routing", true); // para que la persona tenga que colocar la ruta exactamente como es

//despues los middleweare

//despues van las rutas
app.get("/Username", (req, res) => {
  res.send("Username reoute");
});

/* app.get("/dashboard", (req, res) => {
  res.sendFile("Username page");
}); */

app.listen(3000);
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);

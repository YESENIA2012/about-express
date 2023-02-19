//de la linea 3 a la 12 es usando solo node.js, se creó un servidor usando solo node.js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/index.html");
  read.pipe(res);
});

server.listen(3000);
console.log(`server on port ${3000}`);

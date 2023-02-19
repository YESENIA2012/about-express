const express = require("express");

const router = express.Router();

router.get("/UserName", (req, res) => {
  res.send("Username route");
});

router.get("/profile", (req, res) => {
  res.send("Profile route");
});

module.exports = router;

//esta es otra forma de exportar rutas

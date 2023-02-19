function HomeRoutes(app) {
  app.all("/about", (req, res) => {
    res.send("about page");
  });

  app.all("/dashboard", (req, res) => {
    res.render("index");
  });
}

module.exports = HomeRoutes;

//esta es otra forma de implemetar rutas y no tenerlas todas en un solo archivo

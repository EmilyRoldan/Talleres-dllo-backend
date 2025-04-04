const { app, port } = require("./server.js");
const routes = require("./routes.js");

app.use("/users", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

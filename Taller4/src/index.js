const { app, port } = require("./server");
const routes = require("./routes");

app.use("/users", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

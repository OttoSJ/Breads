// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ROUTES - LANDING PAGE
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// ROUTES BREADS
const breadsControllers = require("./controllers/breads_controllers");
app.use("/breads", breadsControllers);

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

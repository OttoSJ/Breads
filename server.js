// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// CONFIGURATION
const PORT = process.env.PORT;
const app = express();

// VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Breads Route
const breadsControllers = require("./controllers/breads_controllers");
app.use("/breads", breadsControllers);

// Bakers Route
const bakersController = require("./controllers/bakers_controllers");
app.use("/bakers", bakersController);

// ROUTES - LANDING PAGE
app.get("/", (req, res) => {
  res.redirect("/breads");
});

// WILDCARD ROUTES
app.get("*", (req, res) => {
  res.render("error404");
});

// DATABASE CONNECTIONS
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

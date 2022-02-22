// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// CONFIGURATION
const PORT = process.env.PORT || 3000;
const breadsControllers = require("./controllers/breads_controllers");
const app = express();

<<<<<<< HEAD
// VIEW ENGINE
=======
// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
>>>>>>> 464a77c6686bd70bbb9aa29c8e2353ad8e28d07c
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/breads", breadsControllers);

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

// WILDCARD ROUTES
app.get("*", (req, res) => {
  res.render("404");
});

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

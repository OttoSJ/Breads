// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES - LANDING PAGE
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// BREADS
const breadsControllers = require("./controllers/breads_controllers");
app.use("/breads", breadsControllers);

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

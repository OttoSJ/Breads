const express = require("express");
const breads = express.Router();
const Breads = require("../models/breads.js");

// INDEX
breads.get("/:arrayIndex", (req, res) => {
  res.send(Breads[req.params.arrayIndex]);
});

module.exports = breads;

// DEPENDENCIES
const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker");
const bakerSeedData = require("../models/baker_seed");

// localhost:3010/bakers/data/seed will seed the data to the database
baker.get("/data/seed", (req, res) => {
  Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

baker.get("/:id", (req, res) => {
  Baker.findById(req.params.id)
    .populate({
      path: "breads",
      options: { limit: 2 },
    })
    .then((foundBakers) => {
      res.render("bakerShow", {
        baker: foundBakers,
      });
    });
});
module.exports = baker;

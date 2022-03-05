const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads.js");
const Baker = require("../models/baker");
const baker = require("./bakers_controllers.js");

// INDEX
breads.get("/", async (req, res) => {
  const foundBakers = await Baker.find().lean();
  const foundBreads = await Bread.find().limit(10).lean();

  res.render("index", {
    breads: foundBreads,
    bakers: foundBakers,
    title: "Index Page",
  });
});

//  NEW
breads.get("/new", (req, res) => {
  Baker.find().then((foundBakers) => {
    res.render("new", {
      bakers: foundBakers,
    });
  });
});

// EDIT
breads.get("/:id/edit", (req, res) => {
  Baker.find().then((foundBakers) => {
    Bread.findById(req.params.id).then((foundBread) => {
      res.render("edit", {
        bread: foundBread,
        bakers: foundBakers,
      });
    });
  });
});

// SHOW BREAD
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .populate("baker")
    .then((foundBread) => {
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      if (isNaN(id)) {
        res.render("error404");
      } else !foundBread[id];
      res.render("error404");
    });
});

// CREATE
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

//  DELETE BREADS ROUTE
breads.delete("/:id", (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then((deleteBread) => {
    res.status(303).redirect("/breads");
  });
});

// DELETE BAKER ROUTE
baker.delete("/:id", (req, res) => {
  Baker.findByIdAndDelete(req.params.id).then((deleteBaker) => {
    res.status(303).redirect("/breads");
  });
});

//  UPDATE
breads.put("/:id", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateBread) => {
      res.redirect(`/breads/${req.params.id}`);
    }
  );
});

module.exports = breads;

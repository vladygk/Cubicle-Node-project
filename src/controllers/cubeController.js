const Cube = require("../models/Cube.js");
const db = require("../db.json");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = (req, res) => {
  const cube = new Cube(req.body);

  cube.save();

  res.redirect("/");
};

exports.getDetails = (req, res) => {
  const cubeId = Number(req.params.cubeId);

  if (!cubeId) {
    return res.redirect("/404");
  }

  const cube = db.cubes.find((x) => x.id === cubeId);

  res.render("details", { cube: cube });
};

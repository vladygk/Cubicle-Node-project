const db = require("../db.json");

exports.getHomePage = (req, res) => {
  const { search, from, to } = req.query;
  console.log(search);
  let cubes = db.cubes;

  if (search) {
    cubes = cubes.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    cubes = cubes.filter((c) => c.difficultyLevel >= from);
  }
  if (to) {
    cubes = cubes.filter((c) => c.difficultyLevel <= to);
  }

  res.render("index", { cubes, search,from,to });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.get404Page = (req, res) => {
  res.render("404");
};

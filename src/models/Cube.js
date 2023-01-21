const fs = require("fs");
const path = require("path");
const db = require("../db.json");

class Cube {
  constructor({ name, description, imageUrl, difficultyLevel }) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }

  static save(cube) {
    let prevID = db.cubes[db.cubes.length - 1];
    if (db.cubes[0] === undefined) {
      prevID = 0;
    }
    cube.id = prevID + 1;
    console.log(this.id);
    db.cubes.push(cube);
    const jsonData = JSON.stringify(db, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "../db.json"), jsonData);
  }
}

module.exports = Cube;

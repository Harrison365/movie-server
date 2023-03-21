const db = require("./connection.js");
const data = require("./data/dev-data/index");
const seed = require("./seed");

seed(data).then(() => {
  db.end();
});

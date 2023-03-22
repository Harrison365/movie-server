const db = require("../db/connection");

exports.fetchMovies = () => {
  return db.query("SELECT * FROM movies;").then((result) => {
    return result.rows;
  });
};

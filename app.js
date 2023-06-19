const express = require("express");
const app = express();
const { getMovies } = require("./controllers/getMovies");

app.get("/api/movies", getMovies);

module.exports = app;
//yo

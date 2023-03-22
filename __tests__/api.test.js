const seed = require("../db/seed");
const data = require("../db/data/test-data/index");
const db = require("../db/connection");
const app = require("../app");
const request = require("supertest");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("/api/movies", () => {
  test("200 - returns an array of category objects", () => {
    return request(app)
      .get("/api/movies")
      .expect(200)
      .then((res) => {
        const moviesArray = res.body.movies;
        expect(Array.isArray(moviesArray)).toBe(true);
        expect(moviesArray.length).toBeGreaterThan(0);
        moviesArray.forEach((obj) => {
          expect(obj).toEqual({
            movie_id: expect.any(Number),
            movie_name: expect.any(String),
            director: expect.any(String),
            release_year: expect.any(Number),
            duration: expect.any(Number),
            image_url: expect.any(String),
            votes: expect.any(Number),
            score: expect.any(Number),
          });
        });
      });
  });
});

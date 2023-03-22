- Create setup.sql
  This will drop any databases that exist and creat new ones. Both development and test.

- npm i pg
  This will allow you to access your dbs using javascript.

- npm i dotenv
  This will allow you to create the connection.js file.

- Create a connection.js (aka index) file
  This will allow you to connect to the relevant db.

- Create .env.development and .env.test files with PGDATABASE = <name_of_the_database>.
  Be careful that the file paths correspond to the file path in the connection file.

- Create data files (often arrays of objects) in both test and dev data files

- You will need to this for accompanying data

- npm i pg-format

- Write a seed file. this will require the connection to the database (using pg), and pg-format (to insert the data in the correct SQL format).

- Write a run-seed file for the dev data to be seeded (you can make an npm script for this)

- npm i express -D

- This will allow you to create your express app file.

```js
const express = require("express");
const app = express();

module.exports = app;
```

- Now, install jest (npm i jest -D), this allows testing as usual.

- Then supertest (npm i supertest -D), this allows tests to make api requests.

- So that we can create out test file.

```js
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");
const db = require("../db/connection");
const app = require("../app");
const request = require("supertest");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});
```

- Write tests

- Write app endpoint

- Write controller

- Write models

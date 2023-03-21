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

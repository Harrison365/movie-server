-Create setup.sql
This will drop any databases that exist and creat new ones. Both development and test.

-npm i pg
This will allow you to access your dbs using javascript

-npm i dotenv
This will allow you to create the connection.js file.

-Create a connection.js file
This will allow you to connect to the relevant db

-Create .env.development and .env.test files with PGDATABASE = <name_of_the_database>
Be careful that the file paths correspond to the file path in the connection file.

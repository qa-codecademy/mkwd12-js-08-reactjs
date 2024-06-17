# Class agenda

This is the class we stop using mock data and start using real data from the API.

## Install Axios

1. npm install axios

Axios is a library that makes it easy to make HTTP requests.

## Starting the server

In the general server folder we have a plain NestJS server, providing a simple API. We will use this server to fetch data from the API. We need PostgreSQL to run the server.

Follow the following steps to run the server & client app:

1. Create `delivery` database in PG Admin
2. Create an `.env` file in the server folder
3. Open terminal and navigate to server folder
4. Run `npm install`
5. Run `npm run start:dev`
6. Open a new tab (or new window) of the terminal you are using
7. Navigate to client app
8. Run `npm install`
9. Run `npm start dev`
10. Server swagger docs are visible on `localhost:3000`
11. Execute PUT `/dishes` endpoint to populate dishes in the database

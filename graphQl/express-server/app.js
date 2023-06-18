// express server
// import React from 'react'; ==> ES6 (module js)
// import schema from './schema';
//const React = require('react'); ==> ES5 (common js)

const express = require("express");
const cors = require("cors");
const graphQLHttpServer = require("express-graphql");
const schema = require("./schema");
const server = express();

// express js serve comes with in-build routing
// "use" ==> middleware

server.use(cors()); // cors is enable
server.use(
  "/graphql",
  graphQLHttpServer({
    schema,
    graphiql: true,
  })
);

// PORT
const PORT = 4444;
server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});

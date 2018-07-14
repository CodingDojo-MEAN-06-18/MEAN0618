// SERVER SETUP
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// DATABASE
require("./server/models/person.js");

// ROUTES
require("./server/config/routes.js")(app);

// START SERVER
app.listen(8000, function() {
  console.log("port 800");
});

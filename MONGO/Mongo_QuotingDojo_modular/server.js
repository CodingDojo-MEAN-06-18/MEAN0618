var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
mongoose.Promise = global.Promise;

////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(session({ secret: "shhhhThisisAsecret!" }));

// SCHEMA
require('./server/models/quote.js');

//ROUTES
require('./server/config/routes.js')(app)


//Start server
app.listen(8000, function() {
  console.log("Listening on port 8000");
});

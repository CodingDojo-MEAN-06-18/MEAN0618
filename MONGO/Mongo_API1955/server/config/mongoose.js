const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/API1955");
mongoose.Promise = global.Promise;

module.exports = mongoose;

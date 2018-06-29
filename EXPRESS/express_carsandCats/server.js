var express = require('express');
var app = express();

//tell app to use the static directory
app.use(express.static(__dirname + "/static"));


// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})
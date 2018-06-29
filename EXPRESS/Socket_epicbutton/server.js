var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({secret: 'shhhItsasecret'}));
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get("/", function(request, response) {
  response.render("index");
});

var server = app.listen(8000, function() {
  console.log("Server is listening on port 8000");
});
var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket) {
  function update() {
    io.emit("update", { count: count });
  }

  socket.on("start", function() {
    if (typeof count != "number") {
      count = 0;
    }
    update();
    console.log(io.engine.clientsCount);
  });

  socket.on("epic", function() {
    count += 1;
    update();
  });
  socket.on("bold", function() {
    count += 2;
    update();
  });
  socket.on("cold", function() {
    count -= 1;
    update();
  });

  socket.on("reset", function() {
    count = 0;
    update();
  });
});

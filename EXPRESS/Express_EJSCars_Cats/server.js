var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));

// set "views" folder and tell express that ejs templating will be used.
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

// Keep your index.html file in the static directory. 
// It should render even when your server does not explicitly handle the '/' route



app.get('/cars/new', function(request, response){
  response.render("form");
})

app.get("/cats", function (request, response){
  // hard-coded user data
  var images_array = [
      {name: "cat one", file: "cat1.jpg"}, 
      {name: "cat two", file: "cat2.jpg"}, 
      {name: "cat three", file: "cat3.jpg"}, 

  ];
  response.render('cats', {cats: images_array});
})

app.get("/cars", function (request, response){
  // hard-coded user data
  var images_array = [
      {name: "car one", file: "car1.jpg"}, 
      {name: "car two", file: "car2.jpg"}, 
      {name: "car three", file: "car3.jpg"}, 

  ];
  response.render('cars', {cars: images_array});
})
app.get('/cars/new', function(request, response){
  response.render("form");
})
// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})
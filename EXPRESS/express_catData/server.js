var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

// set "views" folder and tell express that ejs templating will be used.
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

// Keep your index.html file in the static directory. 
// It should render even when your server does not explicitly handle the '/' route

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

app.get("/cats", function (request, response){
  // hard-coded user data
  var images_array = [
      {name: "steve", file: "cat1.jpg"}, 
      {name: "bob", file: "cat2.jpg"}, 
      {name: "larry", file: "cat3.jpg"}, 

  ];
  response.render('cats', {cats: images_array});
})
app.get("/steve", function (request, response){
  // hard-coded user data
  var catsinfo = [
      {name: "steve", age: '1', file: "cat1.jpg"}

  ];
  response.render('catsinfo', {catsinfo: catsinfo});
})
app.get("/bob", function (request, response){
  // hard-coded user data
  var catsinfo_arrary = [
      
      {name: "bob", age: '2', file: "cat2.jpg"}

  ];
  response.render('catsinfo', {catsinfo: catsinfo_arrary});
})
app.get("/larry", function (request, response){
  // hard-coded user data
  var catsinfo_arrary = [
      {name: "larry", age: '3', file: "cat3.jpg"} 

  ];
  response.render('catsinfo', {catsinfo: catsinfo_arrary});
})
// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})
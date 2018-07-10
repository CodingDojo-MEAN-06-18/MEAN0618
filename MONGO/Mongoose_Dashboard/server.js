const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000, 
    app = express();

//set up body-parser to parse data input
app.use(bodyParser.urlencoded({ extended: true}));

//set up database connection, Schema, model
mongoose.connect('mongodb://localhost/dogs_db');

//listen for connection
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

const { Schema } = mongoose;


const DogSchema = new Schema({
    name: String,
    breed: String,
    weight: Number,
})
//collection -> dogs
const Dog = mongoose.model('dog_pack', DogSchema);

//point server to views
app.set('views', path.join(__dirname, 'views'));
//use ejs as our view engine
app.set('view engine', 'ejs');

//List all of the routes
//GET '/' Displays all of the dogs.
app.get('/', function(req,res) {
    Dog.find({}, function(err, dogs){
        if (err) {console.log(err); }
        res.render('index', {dogs: dogs });
    });
});

//GET '/mongooses/new' Displays a form for making a new dog.
app.get('/new', function(req,res) {
    res.render('new');
});

//GET '/mongooses/:id' Displays information about one dog.
app.get('/:id', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('show', { dog: response[0] });
    });
  });

//POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
app.post('/', function(req,res){
    Dog.create(req.body, function(err, dogs){
        if (err) { console.log(err); }
        res.redirect('/')
    });
});

//GET '/mongooses/edit/:id' Should show a form to edit an existing dog.
app.get('/:id/edit/', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err); }
        res.render('edit', { dog: response[0] });
      })
    });
//POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
app.post('/:id', function(req, res){
    Dog.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
//POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
app.post('/:id/delete', function(req, res) {
    Dog.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

//end of routing
app.listen(port);
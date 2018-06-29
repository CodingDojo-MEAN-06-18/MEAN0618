var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'thisisasecretshhhhhh!',
resave: false,
saveUninitialized: true,
cookie: { maxAge: 60000}
}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (req.session.body !== undefined){

    }
    let posted = false;
    res.render('index');
})
app.post('/result', function(req, res) {
    req.session.info = req.body;
    console.log(req.session.info);
    
    res.redirect("posted");
})
app.get('/posted', function(req, res) {
    res.render('results', {info: req.session.info});
})
app.get('/return', function(req, res) {
     res.redirect("/");
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});
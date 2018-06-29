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
    if (req.session.count === undefined){
        req.session.count = 0;
    };
    req.session.count = req.session.count + 1;
    res.render('count', {count: req.session.count});
})
app.get('/addTwo', function(req, res){
    req.session.count = req.session.count + 1;
    // This adds 1, then redirects to page which automatically adds 1 - resulting in + 2. If it were +1 and used .render, hitting refresh would auto add 2 instead of 1! 
    res.redirect('/');
})
app.get('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
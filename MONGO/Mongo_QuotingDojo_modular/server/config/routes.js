const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require('../controllers/quotes.js');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
      });
      
      app.get("/quotes", function(req, res) {
        Quote.find({}, function(err, quotes) {
          if (err) {
            console.log(err);
          } else {
            res.render("quotes", { quotes: quotes });
          }
        });
      });
      
      app.post("/quotes", function(req, res) {
        Quote.create(req.body, function(err) {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/quotes");
          }
        });
       
    });
    };
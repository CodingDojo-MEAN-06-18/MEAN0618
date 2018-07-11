const mongoose = require('mongoose');
const Quote = require('../models/quote.js');

module.exports = {

    index: function(request, response) {
        response.render('index');
    },

    post_quote: function(request, response) {
        // console.log('this is post.quotes');
        Quote.create(request.body, function (error) {
            if (error) {
                console.log(error);
            }
        });
        response.redirect('/quotes');
    },

    get_quotes: function(request, response) {
        Quote.find({}, function (error, quotes) {
            // console.log('this is get.quotes');
            if (error) {
                console.log(error);
            }
            response.render('quotes', {quotes: quotes});
        });
    },

 




}
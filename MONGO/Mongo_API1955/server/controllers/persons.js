const Person = require("./../models/person.js");

module.exports = {
  index: function(req, res) {
    Person.find({}, function(err, persons) {
      if (err) {
        res.json(err);
      } else {
        res.json(persons);
      }
    });
  },
//CREATE
  new: function(req, res, name) {
    Person.create({ name: name }, function(err) {
      if (err) {
        res.json(err);
      } else {
        console.log("Created Success");
        res.redirect("/");
      }
    });
  },
//REMOVE
  remove: function(req, res, name) {
    Person.deleteOne({ name: name }, function(err) {
      if (err) {
        res.json(err);
      } else {
        console.log("Remove Success");
        res.redirect("/");
      }
    });
  },
//DETAILS
  details: function(req, res, name) {
    Person.findOne({ name: name }, function(err, person) {
      if (err) {
        res.json(err);
      } else {
        res.json(person);
      }
    });
  }
};

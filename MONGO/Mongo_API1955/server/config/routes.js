const persons = require("./../controllers/persons.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    persons.index(req, res);
  });
// CREATE
  app.get("/new/:name", function(req, res) {
    persons.new(req, res, req.params.name);
  });
//DELETE
  app.get("/remove/:name", function(req, res) {
    persons.remove(req, res, req.params.name);
  });
//DETAILS
  app.get("/:name", function(req, res) {
    persons.details(req, res, req.params.name);
  });
};

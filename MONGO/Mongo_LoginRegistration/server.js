var express = require("express");
var session = require("express-session");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(session({ secret: "shhhthisisAsecret" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/users");
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"]
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"]
  },
  email: {
    type: String,
    required: [true, "Email name is required"]
  },
  date: {
    type: Date,
    required: [true, "Date of Birth is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  }
});
mongoose.model("user", UserSchema);
var User = mongoose.model("user");

mongoose.Promise = global.Promise;

var arrErrors = [];

app.get("/", function(req, res) {
  if (arrErrors) {
    res.render("index", { errors: arrErrors });
    arrErrors = [];
  } else {
    res.render("index");
  }
});

app.post("/", function(req, res) {
  User.create(req.body, function(err) {
    if (err) {
      Object.keys(err.errors).forEach(key => {
        arrErrors.push(err.errors[key].message);
      });
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/login", function(req, res) {
  console.log(req.session.first_name);
  console.log(req.session.email);

  res.render("login", { user: req.session.first_name });

  
});

app.post("/login", function(req, res) {
  console.log(" req.body: ", req.body);
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (error, user) => {
      if (!user) {
        arrErrors.push("Invalid Email or Password");
        res.redirect("/");
      } else {
        req.session.email = user.email;
        req.session.first_name = user.first_name;
        res.redirect("/login");
      }
    }
  );
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server port : ${port}`));

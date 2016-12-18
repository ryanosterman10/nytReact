// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Requiring our Comment and Article models
var Article = require("./models/Article.js");

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Database configuration with mongoose
var dbURI = 'mongodb://localhost/nytreact';
if (process.env.NODE_ENV === 'production') {
    dbURI= "";
}
mongoose.connect(dbURI);
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// app.post('/submit', function(req, res) {

//   var content = new Article(req.body);
 
//   content.save(req.body, function(err, saved) {
//     if (err) {
//       console.log('error saving to mongo ',err);
//     } else {
//       console.log('saved data',saved);
//       res.send(saved);
//     }
//   });

// });

// app.get('/all', function(req, res) {
 
//   Article.find({}, function(err, found) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });


app.get('/', function(req, res) {
  res.send(index.html);
});

app.listen(PORT, function() {
  console.log('App running on',PORT);
});
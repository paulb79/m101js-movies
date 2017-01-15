'use strict';

var express = require("express"),
    body = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path"),
    jade = require("jade"),
    morgan = require("morgan");

var app = express();
var config = require('./middlewares/mongoose.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if (err) {
    console.log('Error connecting to the MonogoDB ' + err);
  } else {
    console.log("Connected to Mongo DB: " + config.mongoURI[app.settings.env]);
  }
} );

app.use(morgan('combined'));
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(body.urlencoded({extended: false}));

var moviesRouter = require("./controllers/movies")

app.use(moviesRouter);

var server = app.listen(app.get('port'), function() {
  console.log("Movies started on port " + app.get('port'));
});

module.exports = server;

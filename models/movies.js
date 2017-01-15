'use strict';

var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String },
  createdAt: { type: Date, default: Date.now },
  imdbUrl: { type: String }
});

var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

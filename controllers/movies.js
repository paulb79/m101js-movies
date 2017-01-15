'use strict';
var express = require('express');
var router = express.Router();

var Movie = require("../models/movies");

// List the movies currently available
router.get("/", function(req, res) {

  Movie.find()
        .sort({ title: "ascending" })
        .exec(function(err, movies) {
          if(err) {
            console.log("Error failed to retrieve movie listings");
          } else {
            res.render("index", {movies: movies});
          }
        });
});


module.exports = router;

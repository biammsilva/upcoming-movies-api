var express = require('express');
var router = express.Router();
var service = require('./service');
var Movie = require('./models.js');


router.get('/', function (req, res) {
  var page = req.query.page || 1;
  service.getUpcomingMovies(page).then(function(result) {
    let movies = [];
    for (const movie of result['results']) {
      movies.push(new Movie(
        movie.title, 
        movie.backdrop_path,
        movie.genre_ids, 
        movie.overview, 
        movie.release_date
      ));
    }
    delete result['results'];
    res.json({"movies": movies, "pagination": result});
  }).catch(function(error) {
    res.json({"message": error});
  });
})

module.exports = router;
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
        movie.id, movie.title, movie.poster_path,movie.genre_ids, movie.overview, movie.release_date
      ));
    }
    delete result['results'];
    res.json({"movies": movies, "pagination": result});
  }).catch(function(error) {
    res.status(500).json({"message": error});
  });
})

router.get('/search', function (req, res) {
  var page = req.query.page || 1;
  var text = req.query.text;
  service.searchMovie(text, page).then(function(result) {
    let movies = [];
    for (const movie of result['results']) {
      movies.push(new Movie(
        movie.id, movie.title, movie.poster_path,movie.genre_ids, movie.overview, movie.release_date
      ));
    }
    delete result['results'];
    res.json({"movies": movies, "pagination": result});
  }).catch(function(error) {
    res.status(500).json({"message": error});
  });
})

router.get('/:id', function (req, res) {
  var movie_id = req.params.id
  service.getMovie(movie_id).then(function(movie) {
    movie = new Movie(
      movie.id, movie.title, movie.poster_path,movie.genre_ids, movie.overview, movie.release_date
    );
    res.json(movie);
  }).catch(function(error) {
    res.status(500).json({"message": error});
  });
})

module.exports = router;
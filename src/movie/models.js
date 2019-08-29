module.exports = class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.name = movie.title;
    this.poster_image = process.env.STATIC_URL + (movie.poster_path || movie.backdrop_path);
    this.genre = movie.genres || movie.genre_ids;
    this.overview = movie.overview;
    this.release_date = movie.release_date;
  }

  setGenres(genres){
    let user_genre_ids = this.genre;
    this.genre = [];
    for (const genre of user_genre_ids) {
      const genre_obj = genres.find(g => g.id === genre);
      this.genre.push(genre_obj);
    }
  }
};
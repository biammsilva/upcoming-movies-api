module.exports = class Movie {
  constructor(name, poster_image, genre, overview, release_date) {
    this.name = name;
    this.poster_image = poster_image;
    this.genre = genre;
    this.overview = overview;
    this.release_date = release_date;
  }
};
var request = require('request-promise');

module.exports = {
  getUpcomingMovies: function(page){
    return request({
      method: "GET", 
      uri: process.env.API_URL + "/movie/upcoming",
      qs: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: page
      },
      json: true
    });
  },

  getMovie: function(id){
    return request({
      method: "GET", 
      uri: process.env.API_URL + `/movie/${id}`,
      qs: {
        api_key: process.env.API_KEY,
        language: 'en-US'
      },
      json: true
    });
  },

  searchMovie: function(text, page){
    return request({
      method: "GET", 
      uri: process.env.API_URL + "/search/movie",
      qs: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: page,
        query: text
      },
      json: true
    });
  }
}

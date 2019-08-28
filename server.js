const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Movies Api."});
});

var movie = require('./src/movie/routes.js');
app.use('/movie', movie);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
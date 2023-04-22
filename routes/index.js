const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render('movies', { movies });
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies/:id', async (req, res) => {
  const movieInfo = await Movie.findById(req.params.id);
  try {
    res.render('movie-info', movieInfo);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

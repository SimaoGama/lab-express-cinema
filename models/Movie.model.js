const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
      type: String
    },
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true
  }
);

const movieModel = model('Movie', movieSchema);
module.exports = movieModel;

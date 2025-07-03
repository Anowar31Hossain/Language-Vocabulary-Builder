const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
      trim: true,
    },
    definition: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // image URL (optional)
      default: ''
    }
  },
  {
    timestamps: true // createdAt, updatedAt automatically
  }
);

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;

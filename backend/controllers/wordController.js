const Word = require('../models/Word');

// POST /api/words
const createWord = async (req, res) => {
  try {
    const { word, definition, image } = req.body;

    if (!word || !definition) {
      return res.status(400).json({ message: 'Word and definition are required.' });
    }

    const newWord = new Word({ word, definition, image });
    await newWord.save();

    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/words
const getAllWords = async (req, res) => {
  try {
    const words = await Word.find().sort({ createdAt: -1 });
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWord,
  getAllWords,
};

const express = require('express');
const router = express.Router();

const { createWord, getAllWords } = require('../controllers/wordController');
const Word = require('../models/Word'); 

// ✅ Existing Routes
router.post('/', createWord);     // POST: /api/words
router.get('/', getAllWords);     // GET:  /api/words

// ✅ New: Bulk Add Route
router.post('/bulk-add', async (req, res) => {
  try {
    const words = req.body;
    if (!Array.isArray(words)) {
      return res.status(400).json({ error: 'Data must be an array of words.' });
    }

    await Word.insertMany(words);
    res.status(201).json({ message: '✅ Words added successfully!' });
  } catch (error) {
    res.status(500).json({ error: '❌ Something went wrong while adding words.' });
  }
});

module.exports = router;

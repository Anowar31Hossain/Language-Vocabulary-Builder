const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const wordRoutes = require('./routes/wordRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ VocabBuilder Backend is Running!');
});

// API route for words
app.use('/api/words', wordRoutes);  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

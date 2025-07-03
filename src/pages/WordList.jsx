import React, { useEffect, useState } from 'react';
import './WordList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

// 🔊 Text-to-Speech Function
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
};

const WordList = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // 🔄 Fetch all words from backend
  const fetchWords = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/words');
      const data = await res.json();
      setWords(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching words:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  // 🔍 Filter words based on search
  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wordlist-container">
      <h2>Word List</h2>

      <input
        type="text"
        placeholder="Search by word or definition..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading words...</p>
      ) : filteredWords.length === 0 ? (
        <p>No matching words found.</p>
      ) : (
        <div className="word-cards">
          {filteredWords.map((word) => (
            <div className="word-card" key={word._id}>
              <div className="word-header">
                <span className="word-text">{word.word}</span>
                <button onClick={() => speak(word.word)} className="speak-btn">
                  <FontAwesomeIcon icon={faVolumeUp} />
                </button>
              </div>
              <p>{word.definition}</p>
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default WordList;

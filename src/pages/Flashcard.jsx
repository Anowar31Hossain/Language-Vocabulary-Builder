import React, { useEffect, useState } from 'react';
import './Flashcard.css';

const Flashcard = () => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch('https://language-vocabulary-builder.onrender.com/api/words');
        const data = await res.json();

        // Filter only words with a valid image URL
        const withImages = data.filter((word) => word.image && word.image.trim() !== '');
        setWords(withImages);
      } catch (err) {
        console.error('Error fetching words:', err);
      }
    };

    fetchWords();
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % words.length);
  };

  if (words.length === 0) {
    return <div className="flashcard-container"><p>📭 No flashcards with images found!</p></div>;
  }

  const current = words[index];

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="front">
          <img src={current.image} alt={current.word} />
          <h3>{current.word}</h3>
        </div>
        <div className="back">
          <p>{current.definition}</p>
        </div>
      </div>
      <button onClick={nextCard}>➡️ Next</button>
    </div>
  );
};

export default Flashcard;

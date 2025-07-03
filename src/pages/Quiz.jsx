import React, { useEffect, useState, useCallback } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [words, setWords] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0); 
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/words');
        const data = await res.json();
        setWords(data);
      } catch (err) {
        console.error('Error loading words:', err);
      }
    };
    fetchWords();
  }, []);

  const getRandomQuestion = useCallback(() => {
    if (words.length < 4) return;

    const randomIndex = Math.floor(Math.random() * words.length);
    const correctWord = words[randomIndex];

    let incorrect = words.filter((w) => w._id !== correctWord._id);
    incorrect = incorrect.sort(() => 0.5 - Math.random()).slice(0, 3);

    const optionPool = [...incorrect.map(i => i.definition), correctWord.definition];
    const shuffledOptions = optionPool.sort(() => 0.5 - Math.random());

    setCurrentQuestion(correctWord);
    setOptions(shuffledOptions);
    setIsAnswered(false);
    setTimeLeft(10);
  }, [words]);

  useEffect(() => {
    if (!isStarted || isAnswered || !currentQuestion) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      setTotalQuestions(prev => prev + 1); // Increase total even if not answered
      setTimeout(() => {
        getRandomQuestion();
      }, 1000);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isStarted, isAnswered, currentQuestion, getRandomQuestion]);

  const handleAnswer = (selected) => {
    if (isAnswered) return;

    setIsAnswered(true);
    setTotalQuestions(prev => prev + 1);
    if (selected === currentQuestion.definition) {
      setScore(score + 1);
    }

    setTimeout(() => {
      getRandomQuestion();
    }, 1000);
  };

  const handleStart = () => {
    setIsStarted(true);
    setScore(0);
    setTotalQuestions(0); // Reset total
    getRandomQuestion();
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  const handleReset = () => {
    setScore(0);
    setTotalQuestions(0);
    getRandomQuestion();
    setIsStarted(true);
  };

  return (
    <div className="quiz-container">
      <h2>🧠 Quiz Mode</h2>

      <div className="quiz-controls">
        <button onClick={handleStart}>▶️ Start Quiz</button>
        <button onClick={handleStop}>⏹️ Stop Quiz</button>
        <button onClick={handleReset}>🔄 Reset Quiz</button>
      </div>

      <div className="score-box">
        🏆 Score: {score} out of {totalQuestions}
      </div>

      {isStarted && currentQuestion && (
        <div className="quiz-question">
          <h3>⏰ Time Left: <span>{timeLeft}s</span></h3>
          <h3>What is the meaning of: <span>{currentQuestion.word}</span></h3>
          <div className="quiz-options">
            {options.map((opt, index) => (
              <button
                key={index}
                className={`option-btn ${isAnswered ? (opt === currentQuestion.definition ? 'correct' : 'wrong') : ''}`}
                onClick={() => handleAnswer(opt)}
                disabled={isAnswered}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

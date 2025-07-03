import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Vocabulary Builder</h1>
        <p>Improve your English vocabulary with definitions, flashcards, and quizzes!</p>

        <div className="home-buttons">
          <Link to="/addword" className="home-btn">➕ Add New Words</Link>
          <Link to="/flashcard" className="home-btn outline">Practice Flashcards</Link>
          <Link to="/quiz" className="home-btn outline">Take a Quiz</Link>
        </div>
      </div>


    </div>
  );
};

export default Home;

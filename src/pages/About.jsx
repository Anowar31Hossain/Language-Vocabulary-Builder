import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src="/profilephoto.jpg" alt="Your Portrait" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Anowar Hossain</strong>, a passionate learner and tech enthusiast.
            This project is part of my learning journey to improve my skills in full-stack development
            using React and MongoDB.
          </p>

          <h2>About the Project</h2>
          <p>
            <strong>Language Vocabulary Builder</strong> is a modern web app designed to help users build their English vocabulary through features like:
            adding new words with definitions and images, practicing through flashcards and quizzes, and storing everything in a backend database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

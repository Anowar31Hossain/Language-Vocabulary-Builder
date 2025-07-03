import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';  
import Footer from './components/Footer';   

import Home from './pages/Home';            
import WordList from './pages/WordList';    
import AddWord from './pages/AddWord';      
import Flashcard from './pages/Flashcard';  
import About from './pages/About';         
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordlist" element={<WordList />} />
          <Route path="/addword" element={<AddWord />} />
          <Route path="/flashcard" element={<Flashcard />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;

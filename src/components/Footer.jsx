import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact: <a href="mailto:your.email@example.com">mdanowarnoyon7075@gmail.com</a></p>
        <p>Developed by: <strong>Anowar Hossain</strong></p>
        <p>
          🔗 <a href="https://www.linkedin.com/in/anowar-hossain-7940422ab/" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Anowar31Hossain" target="_blank" rel="noreferrer"> GitHub</a> | 
          <a href="https://anowar31hossain.github.io/Personal_portfolio/home.html" target="_blank" rel="noreferrer"> Portfolio</a>
          <a href="https://x.com/Anowar5Noyon" target="_blank" rel="noreferrer"> X</a>
        </p>
        <p>© {new Date().getFullYear()} Vocabulary Builder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

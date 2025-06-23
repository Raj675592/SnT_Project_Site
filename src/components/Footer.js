import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About SnT Council</h3>
            <p>The Science and Technology Council at IIT Kanpur promotes technical excellence through various clubs and innovative projects.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Clubs</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>IIT Kanpur, Kalyanpur</p>
            <p>Kanpur, UP 208016</p>
            <p>snt@iitk.ac.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Science and Technology Council, IIT Kanpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

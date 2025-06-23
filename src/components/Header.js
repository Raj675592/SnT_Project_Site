import React from 'react';

const Header = ({ setShowModal }) => {
  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">SnT Summer Projects</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#clubs">Clubs</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-outline" onClick={() => setShowModal(true)}>Login</button>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

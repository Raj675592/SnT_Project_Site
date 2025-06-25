import React, {useState} from 'react';
import './header.css';
const Header = ({ setShowModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="container">
        <img className="web-logo" src="https://th.bing.com/th/id/OIP.tAa6rmkf2AneA1J36x_UAgHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" alt="Logo" />
        <a href="#" className="logo">Science and Technology Council</a>
         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-links${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#clubs" onClick={() => setMenuOpen(false)}>Clubs</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-outline" onClick={() => setShowModal(true)}>Login</button>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;

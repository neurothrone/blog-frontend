import { Link } from "react-router";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BlogApp</Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/posts" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

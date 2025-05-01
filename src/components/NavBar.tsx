import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../hooks/use-user.ts";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await signOut(getAuth());
    setIsMenuOpen(false);
  }

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BlogApp</Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/posts" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Posts</Link>
          </li>
          {isLoading
            ? (<li className="navbar-item">Loading...</li>)
            : user ? (
                <>
                  <li className="navbar-item" style={{ color: "gold" }}>{user.email}</li>
                  <li className="navbar-item">
                    <button
                      className="navbar-link"
                      style={{ color: "red" }}
                      onClick={handleLogout}>Log Out
                    </button>
                  </li>
                </>
              )
              : <li className="navbar-item">
                <Link
                  to="/login"
                  className="navbar-link"
                  onClick={handleLogin}>Log In
                </Link>
              </li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

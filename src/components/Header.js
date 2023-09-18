import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
  <nav>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/story" className="nav-link">Story</Link>
      </li>
      <li className="nav-item">
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      </li>
    </ul>
  </nav>
</header>

  );
}

export default Header;

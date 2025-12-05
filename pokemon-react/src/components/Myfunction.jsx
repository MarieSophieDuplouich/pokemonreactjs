import { useState } from 'react';

export default function MyFunction() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-container">

      {/* Top Navigation Menu */}
      <div className="topnav">
        <a href="#home" className="active">Logo</a>

        {/* Hamburger icon */}
        <a
          href="#"
          className="icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </a>

        {/* Menu mobile */}
        {menuOpen && (
          <div id="pokemon-list-mobile">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        )}
      </div>

      <div style={{ paddingLeft: '16px' }}>
        <h3>Vertical Mobile Navbar</h3>
        <p>Click on the hamburger menu (three bars) in the top right corner to toggle the menu.</p>
      </div>

    </div>
  );
}

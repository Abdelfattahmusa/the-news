import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" >BBC NEWS</div>
        <ul className="nav-menu">
        <li className="nav-item">
            <a className="nav-links"  href='  https://www.bbc.com/news'>News</a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href='https://www.bbc.co.uk/aboutthebbc'>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-links"  href='https://www.bbc.co.uk/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
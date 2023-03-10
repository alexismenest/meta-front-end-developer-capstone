import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoImage from '../assets/logo.png';
import hamburgerMenuIcon from '../assets/icon-hamburger-menu.svg';
import { navLinks } from '../utils/navLinks';
import './Nav.css';

const Nav = () => {
  const currentLocation = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="container grid nav-bar">
      <Link className="nav-bar-logo" to="/">
        <img src={logoImage} alt="Little Lemon logo" />
      </Link>
      <button 
        className="nav-bar-hamburger" 
        type="button" 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <img src={hamburgerMenuIcon} alt="Navigation menu icon" />
      </button>
      <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}>
        {navLinks.map((navLink, index) => 
          <li key={index}>
            <Link 
              className={currentLocation.pathname === navLink.anchor ? 'currentLocation' : ''} 
              to={navLink.anchor}
            >
              {navLink.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

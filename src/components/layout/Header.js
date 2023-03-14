import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import logoImage from './assets/logo.png';
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pages from '../../utils/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
  const currentLocation = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={pages.get('home').path}>
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button 
          className="nav-bar-hamburger" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}>
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <Link 
                className={currentLocation.pathname === navLink.path ? 'currentLocation' : ''} 
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

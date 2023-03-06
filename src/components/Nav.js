import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import hamburgerMenuIcon from '../assets/icon-hamburger-menu.svg';

const navLinks = [
  {anchor: '/', name: 'Home'},
  {anchor: '/about', name: 'About'},
  {anchor: '/menu', name: 'Menu'},
  {anchor: '/reservations', name: 'Reservations'},
  {anchor: '/order', name: 'Order Online'},
  {anchor: '/login', name: 'Login'},
];

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="container-grid nav-bar">
      <img src={logo} alt="Little Lemon logo" />
      <button 
        type="button" 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <img src={hamburgerMenuIcon} alt="Navigation menu icon" />
      </button>
      <ul className={isNavExpanded ? 'expanded' : ''}>
        {navLinks.map((navLink, index) => 
          <li key={index}>
            <Link to={navLink.anchor}>
              {navLink.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

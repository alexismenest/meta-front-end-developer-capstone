import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';

const contacts = [
  { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
  { icon: faPhone, info: '(312) 593-2744', },
  { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

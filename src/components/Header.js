import logo from '../assets/logo.png';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;

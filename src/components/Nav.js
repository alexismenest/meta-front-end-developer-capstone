
const navLinks = [
  {anchor: '', name: 'Home'},
  {anchor: '', name: 'About'},
  {anchor: '', name: 'Menu'},
  {anchor: '', name: 'Reservations'},
  {anchor: '', name: 'Order Online'},
  {anchor: '', name: 'Login'},
];

function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => 
          <li key={index}>
            <a href={navLink.anchor}>
              {navLink.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

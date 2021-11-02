import Sidebar from './Sidebar';
import '../../css/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Sidebar />
          <a href="#?" className="brand-logo">
            <img
              src={process.env.PUBLIC_URL + '/images/EM_logo.png'}
              alt="logo"
            />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

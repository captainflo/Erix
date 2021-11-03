import Sidebar from './Sidebar';
import '../../css/navbar.css';
import { Animated } from 'react-animated-css';

const Navbar = () => {
  return (
    <>
      <Animated animationIn="fadeIn" animationInDuration={3000}>
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
                <a href="sass.html">Who is Erix Mercedes</a>
              </li>
              <li>
                <a href="badges.html">Portfolio</a>
              </li>
              <li>
                <a href="collapsible.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Animated>
    </>
  );
};

export default Navbar;

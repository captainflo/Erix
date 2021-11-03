import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { HashLink as Anchor } from 'react-router-hash-link';
import '../../css/navbar.css';
import { Animated } from 'react-animated-css';

const Navbar = () => {
  return (
    <>
      <Animated animationIn="fadeIn" animationInDuration={3000}>
        <nav>
          <div className="nav-wrapper">
            <Sidebar />
            <Link className="brand-logo" to="/">
              <img
                src={process.env.PUBLIC_URL + '/images/EM_logo.png'}
                alt="logo"
              />
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Anchor smooth to="/#director">
                  Director's Portfolio
                </Anchor>
              </li>
              <li>
                <Link to="/editor">Editor's Portfolio</Link>
              </li>
              <li>
                <Anchor smooth to="/#contact">
                  Contact
                </Anchor>
              </li>
            </ul>
          </div>
        </nav>
      </Animated>
    </>
  );
};

export default Navbar;

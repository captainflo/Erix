import { HashLink as Anchor } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background image-sidebar">
              <img
                className="responsive-img"
                src={process.env.PUBLIC_URL + '/images/sidebar.png'}
                alt="office"
              />
            </div>
            <a>
              <img className="circle" src="images/Erix.jpeg" alt="circle" />
            </a>
            <a>
              <span className="name white-text">Erix Mercedes</span>
            </a>
            <a>
              <span className="white-text email">Erix.mer@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Anchor className="waves-effect" smooth="true" to="/#director">
            Director's Portfolio
          </Anchor>
        </li>
        <li>
          <Link className="waves-effect" smooth="true" to="/editor">
            Editor's Portfolio
          </Link>
        </li>
        <li>
          <Anchor className="waves-effect" smooth="true" to="/#contact">
            Contact
          </Anchor>
        </li>
      </ul>
      <a href="#?" data-target="slide-out" className="sidenav-trigger">
        <i className="fas fa-bars"></i>
      </a>
    </>
  );
};
export default Sidebar;

const Sidebar = () => {
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background image-sidebar">
              <img
                src={process.env.PUBLIC_URL + '/images/banner.png'}
                alt="office"
              />
            </div>
            <a href="#user">
              <img className="circle" src="images/Erix.jpeg" alt="circle" />
            </a>
            <a href="#name">
              <span className="name white-text">Erix Mercedes</span>
            </a>
            <a href="#email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Portfolio
          </a>
        </li>
      </ul>
      <a href="#?" data-target="slide-out" className="sidenav-trigger">
        <i className="fas fa-bars"></i>
      </a>
    </>
  );
};
export default Sidebar;

import '../../css/footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Footer Content</h5>
            <p className="">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="">Links</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-black">
          © 2014 Copyright Text
          <a className="" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

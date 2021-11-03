import '../../css/footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Contact me</h5>
            <p>
              <i className="fas fa-envelope"></i> Erix.mer@gmail.com
            </p>
            <p>
              <i className="fas fa-mobile"></i> 917-862-6620
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="">Links</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Copyright Erix Mercedes</div>
      </div>
    </footer>
  );
};

export default Footer;

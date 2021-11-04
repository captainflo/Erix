import '../../css/footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Contact me</h5>
            <p className="link-social">
              <a href="mailto:Erix.mer@gmail.com">
                <i className="fas fa-envelope"></i> Erix.mer@gmail.com
              </a>
            </p>
            <p className="link-social">
              <a href="tel:555-555-5555">
                <i className="fas fa-mobile"></i> 917-862-6620
              </a>
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="">Links</h5>
            <ul>
              <li>
                <a
                  className="link-social"
                  href="https://www.linkedin.com/in/erix-mercedes-a3012941/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="link-social"
                  target="_blank"
                  href="https://www.instagram.com/erix_mercedes/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="link-social"
                  href="https://twitter.com/Erix_mercedes"
                  target="_blank"
                >
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

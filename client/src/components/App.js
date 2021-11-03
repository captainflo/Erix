import { useEffect, useState } from 'react';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';
import Welcome from '../pages/Welcome';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeVideo from './utils/WelcomeVideo';

function App() {
  const [loadingBio, setLoadingBio] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingBio(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sidebar
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  });

  return (
    <>
      <BrowserRouter>
        {loadingBio ? (
          <>
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Footer />
          </>
        ) : (
          <Route exact path="/" component={WelcomeVideo} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

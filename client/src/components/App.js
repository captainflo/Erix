import { useEffect } from 'react';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';
import Welcome from '../pages/Welcome';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
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
        <Navbar />
        <Route exact path="/" component={Welcome} />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

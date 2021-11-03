import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../components/actions';
import HeroBanner from '../components/utils/HeroBanner';
import About from '../components/utils/About';
import Portfolio from '../components/utils/portfolio';

const Welcome = (props) => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Portfolio />
    </div>
  );
};

export default connect(null, actions)(Welcome);

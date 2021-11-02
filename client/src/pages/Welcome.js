import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../components/actions';
import Loading from '../components/utils/Loading';
import Strain from '../components/flowers/strain';

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default connect(null, actions)(Welcome);

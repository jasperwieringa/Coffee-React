import React from 'react';
import ReactDOM from 'react-dom';

import Loader from './Loader';

// Test of het component niet crasht
it('renders without crashing', () => {
  const props = {
    drinkType: "CaPpuCino"
  }

  const div = document.createElement('div');
  ReactDOM.render(<Loader drinkType={props.drinkType} />, div);
});

// Test of het component niet crasht
it('renders without crashing 2', () => {
  const props = {
    drinkType: 0
  }
  
  const div = document.createElement('div');
  ReactDOM.render(<Loader drinkType={props.drinkType} />, div);
});


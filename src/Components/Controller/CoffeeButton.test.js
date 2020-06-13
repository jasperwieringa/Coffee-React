import React from 'react';
import ReactDOM from 'react-dom';

import CoffeeButton from './CoffeeButton';

// Test of het component niet crasht
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoffeeButton />, div);
});
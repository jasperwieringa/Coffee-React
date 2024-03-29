import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './Slider';

// Test of het component niet crasht
it('renders without crashing', () => {
  const testCallback = () => {
    console.log("Running testCallback");
  }
  
  const props = {
    name: "TestSlider",
    stock: {
      milk: 10,
      sugar: 10,
      chocolate: 10
    }
  }

  const div = document.createElement('div');
  ReactDOM.render(<Slider name={props.name} stock={props.stock} handleSliderValues={testCallback} />, div);
});
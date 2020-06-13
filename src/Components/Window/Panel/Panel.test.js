import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel';

// Test of het component niet crasht
it('renders without crashing', () => {
  const testCallback = () => {
    console.log("Running testCallback");
  }
  
  const props = {
    bugMultiplier: "CaPpuCino"
  }

  const div = document.createElement('div');
  ReactDOM.render(<Panel handleError={testCallback} bugMultiplier={props.bugMultiplier} />, div);
});

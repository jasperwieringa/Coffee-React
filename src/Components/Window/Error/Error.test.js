import React from 'react';
import ReactDOM from 'react-dom';

import Error from './Error';

const testCallback = () => {
  console.log("Running testCallback");
}

const props = {
  errorDescr: "TestDescr",
  errorMsg: "TestMessage"
}

// Test of het component niet crasht
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error errorDescr={props.errorDescr} errorMsg={props.errorMsg} handleError={testCallback} />, div);
});
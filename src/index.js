import React from 'react';
import ReactDOM from 'react-dom';
import SweetCoffee from './Components/Window/SweetCoffee';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <SweetCoffee />,
  document.getElementById('root')
);

serviceWorker.unregister();

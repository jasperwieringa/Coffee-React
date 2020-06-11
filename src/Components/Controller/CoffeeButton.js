import React from 'react';

import Button from 'react-bootstrap/Button';

// import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';

export default function CoffeeButton(props) {
  function handleError() {
    /* De callback function vanuit SweetCoffee verwacht een String met de foutmelding en een Boolean of er een fout is */
    props.cb("Error message", true);
  }

  return (
    <Button variant="primary" onClick={e => handleError()}>Click me!</Button>
  )
}
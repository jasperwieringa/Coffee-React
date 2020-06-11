import React from 'react';

import Button from 'react-bootstrap/Button';

// import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';

export default function CoffeeButton(props) {
  function handleError() {
    /* De callback function vanuit SweetCoffee verwacht een String met de foutmelding en een Boolean of er een fout is */
    props.cb("Error message", true);
  };

  function getDrink() {

  };

  return (
    <Button variant="secondary" className="h-100 w-100 rounded-0" disabled={props.disabled} onClick={e => handleError()}>{props.name}</Button>
  )
}
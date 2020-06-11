import React from 'react';

import Button from 'react-bootstrap/Button';

export default function CoffeeButton(props) {
  function handleDrink() {
    /* De callback function vanuit SweetCoffee verwacht een String met de foutmelding en een Boolean of er een fout is */
    // props.cb("Error message", true);
    props.handleDrink(props.name);
  };

  return (
    <Button variant="secondary" className="h-100 w-100 rounded-0" disabled={props.disabled} onClick={e => handleDrink()}>{props.name}</Button>
  )
}
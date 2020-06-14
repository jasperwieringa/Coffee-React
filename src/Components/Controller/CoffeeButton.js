import React from 'react';

import Button from 'react-bootstrap/Button';

export default function CoffeeButton(props) {
  return (
    <Button 
      variant="secondary" 
      className={`h-100 w-100 rounded-0 ${styles.button}`} 
      disabled={props.disabled} 
      onClick={() => props.handleDrink(props.name, props.baseReq)}>{props.name}</Button>
  )
}
import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function Slider(props) {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    
    setCount(value);
    props.handleSliderValues(props.name, value);
  }

  return (
    <Col xs={6}>
      <Form.Label className="float-right">{props.name} [{props.stock[props.name]*10}%]</Form.Label>
      <Form.Control
        name={props.name}
        value={count} 
        type="range" 
        max={props.stock[props.name]} 
        step="1" 
        disabled={props.stock[props.name] === 0} 
        onChange={e => handleChange(e)}/>
    </Col>
  )
}
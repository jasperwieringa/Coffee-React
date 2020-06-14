import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function Slider(props) {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    
    setCount(value);
    props.handleSliderValues(props.name, value);
  }

  const renderTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>{count*10}%</Tooltip>
    );
  }

  return (
    <Col xs={6}>
      <Form.Label className="float-right">{props.name} [{props.stock[props.name]*10}%]</Form.Label>
      <OverlayTrigger placement="top" delay={{ show: 10, hide: 200 }} overlay={renderTooltip}>
        <Form.Control
          name={props.name}
          value={count} 
          type="range" 
          max={props.stock[props.name]} 
          step="1" 
          disabled={props.stock[props.name] === 0} 
          onChange={e => handleChange(e)}
        />
      </OverlayTrigger>
    </Col>
  )
}
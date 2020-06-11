import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';

export default function Status(props) {
  const [value, setValue] = useState(0);

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <Form>
      <Form.Group controlId="formBasicRange">
        <Form.Label className="float-right">{props.name} [{props.stock*10}%]</Form.Label>
        <Form.Control type="range" value={value} onChange={e => handleValue(e)} />
      </Form.Group>
    </Form>
  );
};
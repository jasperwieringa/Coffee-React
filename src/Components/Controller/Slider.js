import React from 'react';

import Form from 'react-bootstrap/Form';

export default function Status(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicRange">
        <Form.Label className="float-right">{props.name} [{props.percentage}]</Form.Label>
        <Form.Control type="range" onChange={e => console.log(e.target.value)} />
      </Form.Group>
    </Form>
  );
};
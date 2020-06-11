import React from 'react';

import Form from 'react-bootstrap/Form';

export default function Status(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicRange">
        <Form.Label className="float-right">{props.name}</Form.Label>
        <Form.Control type="range" />
      </Form.Group>
    </Form>
  );
};
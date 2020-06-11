import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Error(props) {

  function resetError() {
    props.cb("Reset", false);
  }

  return (
    <Card bg="danger" className="text-center text-white h-100">
      <Card.Header><h4>Technische storing</h4></Card.Header>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <div>
          <h3>Helaas is er een technische storing:</h3>
          <h4>{props.error}</h4>
          <h3>Het maken van dranken is helaas niet mogelijk.</h3>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="primary" className="float-right" onClick={e => resetError()}>Reset</Button>
      </Card.Footer>
    </Card>
  );
}

export default Error;

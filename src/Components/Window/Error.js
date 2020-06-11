import React from 'react';

import Alert from 'react-bootstrap/Alert'

function Error(props) {
  return (
    <Alert variant="danger" className="h-100">
      <Alert.Heading>Technische storing</Alert.Heading>
      <p>Helaas is er een technische storing: {props.error}</p>
      <hr />
      <p className="mb-0">
        Het maken van dranken is helaas niet mogelijk.
      </p>
    </Alert>
  );
}

export default Error;

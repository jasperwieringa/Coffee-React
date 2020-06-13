import React, { useState } from 'react';

import Error from './Window/Error';
import Panel from './Window/Panel';

import Container from 'react-bootstrap/Container';

export default function SweetCoffee() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error, msg) => {
    setIsError(error);
    setErrorMessage(msg);
  };

  return (
    <Container fluid className="h-100 py-3 position-relative">
      {isError 
        ? <Error handleError={handleError} error={errorMessage} /> // Laat het Error component zien bij een error
        : <Panel handleError={handleError} /> // Laat het Panel component zien bij geen error
      }
    </Container>
  );
}
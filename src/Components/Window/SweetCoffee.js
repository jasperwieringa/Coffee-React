import React, { useState } from 'react';

import Error from './Error'
import Panel from './Panel'

import Container from 'react-bootstrap/Container';

export default function SweetCoffee() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPreparing, setIsPreparing] = useState(false);

  const handleError = (msg, error) => {
    setIsPreparing(true);
    setErrorMessage(msg);
  };

  return (
    <Container fluid className="h-100 py-3 position-relative">
      { isError 
        ? <Error cb={handleError} error={errorMessage} /> 
        : <Panel cb={handleError} busy={isPreparing} /> }
    </Container>
  );
}
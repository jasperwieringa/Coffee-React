import React, { useState, useCallback } from 'react';

import Error from './Error'
import Panel from './Panel'

import Container from 'react-bootstrap/Container';

function SweetCoffee() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Onbekende fout")

  const cb = useCallback((msg, error) => {
    setIsError(error)
    setErrorMessage(msg);
  }, [])

  return (
    <Container fluid className="h-100 py-3 position-relative">
      { isError 
        ? <Error cb={cb} error={errorMessage} /> 
        : <Panel cb={cb} /> }
    </Container>
  );
}

export default SweetCoffee;

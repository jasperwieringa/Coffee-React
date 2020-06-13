import React, { useState } from 'react';

import Error from './Window/Error/Error';
import Panel from './Window/Panel/Panel';

import Container from 'react-bootstrap/Container';

import Status from './Model/Status';

export default function SweetCoffee() {
  const [isError, setIsError] = useState(false);
  const [[errorDescr, errorMsg], setErrorMessage] = useState(["", ""]);

  // Pas deze waarde aan om de kans te vergroten/verkleinen voor een foutmelding
  const bugMultiplier = 100;

  // Handel een eventuele fout af
  const handleError = (status_code) => {
    const { error, description, message } = handleStatus(status_code);

    setIsError(error);
    setErrorMessage([description, message]);
  };

  // Haal de status_code en bijbehorende meldingen op
  const handleStatus = (status_code) => {
    const status = new Status();
    status.setStatusCode(status_code);

    return (status.getStatusCode());
  }

  return (
    <Container fluid className="h-100 py-3 position-relative">
      {isError 
        ? <Error handleError={handleError} errorDescr={errorDescr} errorMsg={errorMsg} /> // Laat het Error component zien bij een error
        : <Panel handleError={handleError} bugMultiplier={bugMultiplier} /> // Laat het Panel component zien bij geen error
      }
    </Container>
  );
}
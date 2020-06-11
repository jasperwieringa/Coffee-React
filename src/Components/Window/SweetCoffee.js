import React, { useState } from 'react';
import { css } from 'emotion';

import Error from './Error';
import Panel from './Panel';
import Loader from './Loader';
import drinkTypes from '../../drinkTypes.json';

import Container from 'react-bootstrap/Container';

export default function SweetCoffee() {
  const [isBusy, setIsBusy] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const styles = {
    container: css`
      bottom: 4.8em;
      right: 5.2em;
      height: 25.6em;
      width: 32.6em;
    `
  };
  
  const handleDrink = (msg, error) => {
    setIsBusy(true);

    if (error) {
      handleError(msg, error)
    }
    // } else {
    //   const timer = setTimeout(() => {
    //     setIsBusy(false)
    //   }, 3000);
    //   return () => clearTimeout(timer);
    // }
  }

  const handleError = (msg, error) => {
    setIsBusy(false);
    setIsError(error);
    setErrorMessage(msg);
  };

  return (
    <Container fluid className="h-100 py-3 position-relative">
      {isError 
        ? <Error handleError={handleError} error={errorMessage} /> 
        : 
        <Container fluid className={`position-absolute px-0 ${styles.container}`}>
          {isBusy
            ? <Loader />
            : <Panel types={drinkTypes} prepareDrink={handleDrink} />
          }
        </Container>
      }
    </Container>
  );
}
import React from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Panel(props) {
  const styles = {
    container: css`
      position: absolute;
      bottom: 5.5em;
      right: 6em;
      height: 24em;
      width: 31em;
    `,
  }

  function setError() {
    // De callback function vanuit SweetCoffee verwacht een String met de foutmelding
    // en een Boolean of er een fout is true/false
    props.cb("Error message", true);
  }

  return (
    <Container fluid className={styles.container}>
    
      <Button onClick={e => setError()}>Click me!</Button>

    </Container>
  );
}

export default Panel;

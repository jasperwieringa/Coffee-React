import React from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Panel(props) {
  const styles = {
    container: css`
      height: 24em;
      width: 31em;
      position: absolute;
      bottom: 5.5em;
      right: 6em;
    `,
  }

  function setMessage() {
    props.cb("Error message");
  }

  return (
    <Container fluid className={styles.container}>
    
      <Button onClick={e => setMessage()}>Click me!</Button>

    </Container>
  );
}

export default Panel;

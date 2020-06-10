import React from 'react';

import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function SweetCoffee() {
  const styles = {
    container: css`
      height: 100%;
    `,
  }

  return (
    <Container fluid className={styles.container}>
    </Container>
  );
}

export default SweetCoffee;

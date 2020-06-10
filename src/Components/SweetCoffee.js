import React from 'react';

import Container from 'react-bootstrap/Container';
import { css } from 'emotion';

function SweetCoffee() {
  const styles = {
    container: css`
      height: 100%;
    `
  }

  return (
    <Container fluid className={styles.container}>
      
    </Container>
  );
}

export default SweetCoffee;

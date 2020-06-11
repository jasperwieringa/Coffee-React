import React from 'react';

import { css } from 'emotion';

import Container from 'react-bootstrap/Container';

function Panel() {
  const styles = {
    container: css`
      height: 24em;
      width: 31em;
      position: absolute;
      bottom: 5.5em;
      right: 6em;
    `,
  }

  return (
    <Container fluid className={styles.container}></Container>
  );
}

export default Panel;

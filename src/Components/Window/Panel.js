import React from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import CoffeeButton from '../Controller/CoffeeButton';

export default function Panel(props) {
  const styles = {
    container: css`
      position: absolute;
      bottom: 5.5em;
      right: 6em;
      height: 24em;
      width: 31em;
    `,
  }

  return (
    <Container fluid className={styles.container}>
      <CoffeeButton cb={props.cb} />
      <CoffeeButton cb={props.cb} />
      <CoffeeButton cb={props.cb} />
      <CoffeeButton cb={props.cb} />
    </Container>
  );
}
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

  const drinkTypes = [{
    name: "Americano",
    id: "ac"
  }, 
  {
    name: "Cappucino",
    id: "cc"
  },
  {
    name: "Wiener Melange",
    id: "wm"
  },
  {
    name: "Chocolade",
    id: "c"
  },
  {
    name: "Zwarte thee",
    id: "zt"
  },
  {
    name: "Earl Gray",
    id: "eg"
  }]

  return (
    <Container fluid className={styles.container}>
      {drinkTypes.map(drink => {
        return(<CoffeeButton key={drink.id} name={drink.name}/>)
      })}
    </Container>
  );
}
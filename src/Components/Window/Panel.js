import React from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';
import Status from '../Controller/Status';

export default function Panel(props) {
  const styles = {
    container: css`
      position: absolute;
      bottom: 5.5em;
      right: 6em;
      height: 24em;
      width: 31em;
    `,
    buttons: css`
      height: 70%;
    `,
    sliders: css`
      height: 20%;
    `,
    status: css`
      height: 10%;
    `
  }

  const drinkTypes = [{
    name: "Americano",
    id: "ac"
  }, {
    name: "Cappucino",
    id: "cpc"
  },{
    name: "Wiener Melange",
    id: "wm"
  },{
    name: "Chocolade",
    id: "cc"
  },{
    name: "Zwarte thee",
    id: "zt"
  },{
    name: "Earl Gray",
    id: "eg"
  }]

  return (
    <Container fluid className={styles.container}>
      <Row className={styles.buttons}>
        {drinkTypes.map(drink => {
          return(
            <Col xs={4} className="mb-1">
              <CoffeeButton key={drink.id} name={drink.name} cb={props.cb}/>
            </Col>
          )
        })}
      </Row>
      <Row className={`pt-2 ${styles.sliders}`}>
        <Col xs={6}>
          <Slider name="Suiker" />
        </Col>
        <Col xs={6}>
          <Slider name="Melk" />
        </Col>
      </Row>
      <Row className={styles.status}>
        <Col xs={12} className="d-flex justify-content-center">
          <Status />
        </Col>
      </Row>
    </Container>
  );
}
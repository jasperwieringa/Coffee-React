import React from 'react';
import { css } from 'emotion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';
import Status from '../Controller/Status';

export default function Panel(props) {  
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
  }];

  const styles = {
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

  return (
    <React.Fragment>
      <Row className={styles.buttons}>
        {drinkTypes.map((value, index) => {
          return(
            <Col xs={4} key={index} className="mb-1">
              <CoffeeButton key={value.id} name={value.name} disabled={props.busy} prepareDrink={props.prepareDrink}/>
            </Col>
          )
        })}
      </Row>
      <Row className={`pt-2 ${styles.sliders}`}>
        <Col xs={6}>
          <Slider name="Suiker" percentage="50%" />
        </Col>
        <Col xs={6}>
          <Slider name="Melk" percentage="20%" />
        </Col>
      </Row>
      <Row className={styles.status}>
        <Col xs={12} className="d-flex justify-content-center">
          <Status />
        </Col>
      </Row>
    </React.Fragment>
  );
}
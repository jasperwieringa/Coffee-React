import React from 'react';
import { css } from 'emotion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';
import Status from '../Controller/Status';

export default function Panel(props) {    
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

  console.log("I am being rendered");

  return (
    <React.Fragment>
      <Row className={`mx-1 mt-3 ${styles.buttons}`}>
        {(props.drinkTypes).map((value, index) => {
          return(
            <Col xs={4} key={index} className="mb-1">
              <CoffeeButton key={value.id} name={value.name} prepareDrink={props.prepareDrink}/>
            </Col>
          )
        })}
      </Row>
      <Row className={`mx-1 pt-2 ${styles.sliders}`}>
        <Col xs={6}>
          <Slider name="Suiker" percentage="50%" />
        </Col>
        <Col xs={6}>
          <Slider name="Melk" percentage="20%" />
        </Col>
      </Row>
      <Row className={`mx-1 ${styles.status}`}>
        <Col xs={12} className="d-flex justify-content-center">
          <Status />
        </Col>
      </Row>
    </React.Fragment>
  );
}
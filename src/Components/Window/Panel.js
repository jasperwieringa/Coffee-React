import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';

import drinkTypes from '../../drinkTypes.json';
import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';

export default function Panel(props) { 
  const coffeeMachine = new SweetCoffeeMachine();  
  const [stock, setStock] = useState(coffeeMachine.getStock());
  const [sugar, setSugar] = useState(0);
  const [milk, setMilk] = useState(0);

  const styles = {
    buttons: css`
      height: 70%;
    `,
    sliders: css`
      height: 30%;
    `
  }

  const handleRequirements = (type, value) => {
    type === "sugar" 
      ? setSugar(value)
      : setMilk(value);
  };

  console.log("I am being rendered")

  return (
    <React.Fragment>
      <Row className={`mx-1 mt-3 ${styles.buttons}`}>
        {(drinkTypes).map((value, index) => {
          return(
            <Col xs={4} key={index} className="mb-1">
              <CoffeeButton key={value.id} name={value.name} milk={milk} sugar={sugar} handleDrink={props.handleDrink}/>
            </Col>
          )
        })}
      </Row>
      <Row className={`mx-1 row d-flex align-content-center ${styles.sliders}`}>
        <Col xs={6}>
          <Slider name="Suiker" type="sugar" stock={stock.sugar} handleRequirements={handleRequirements} />
        </Col>
        <Col xs={6}>
          <Slider name="Melk" type="milk" stock={stock.milk} handleRequirements={handleRequirements} />
        </Col>
      </Row>
    </React.Fragment>
  );
}
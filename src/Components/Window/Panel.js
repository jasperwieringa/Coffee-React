import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';
import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';

import drinkTypes from '../../drinkTypes.json';

export default function Panel(props) {
  const coffeeMachine = new SweetCoffeeMachine();
  const [stock, setStock] = useState(coffeeMachine.getStock())
  const [[sugar, milk], setValues] = useState([0, 0]);

  const styles = {
    buttons: css`
      height: 70%;
    `,
    sliders: css`
      height: 30%;
    `
  }

  const handleValues = (type, value) => {
    setValues(prevValues => {
      const newValue = type === "sugar" 
        ? [Number(value), prevValues[1]] 
        : [prevValues[0], Number(value)]
      return (newValue);
    })
  };

  const handleDrink = (name) => {
    let prepareDrink;

    switch(name.toLowerCase()) {
      case "americano":
        prepareDrink = coffeeMachine.makeAmericano(sugar, milk)
        break;
      case "cappucino":
        prepareDrink = coffeeMachine.makeCappuchino(sugar, milk)
        break;
      case "wiener melange":
        prepareDrink = coffeeMachine.makeWienermelange(sugar, milk)
        break;
      case "chocolade":
        prepareDrink = coffeeMachine.makeChoco(sugar, milk)
        break;
      case "zwarte thee":
        prepareDrink = coffeeMachine.makeTeaBlack(sugar, milk)
        break;
      case "earl gray":
        prepareDrink = coffeeMachine.makeTeaEarlgray(sugar, milk)
        break;
      default:
        return;
    }

    props.handleDrink(name, !prepareDrink, "<error-message>");
  }

  return (
    <React.Fragment>
      <Row className={`mx-1 mt-3 ${styles.buttons}`}>
        {(drinkTypes).map((value, index) => {
          return(
            <Col xs={4} key={index} className="mb-1">
              <CoffeeButton key={value.id} data={value} handleDrink={handleDrink}/>
            </Col>
          )
        })}
      </Row>
      <Row className={`mx-1 row d-flex align-content-center ${styles.sliders}`}>
        <Col xs={6}>
          <Slider name="Suiker" type="sugar" stock={stock} handleValue={handleValues} />
        </Col>
        <Col xs={6}>
          <Slider name="Melk" type="milk" stock={stock} handleValue={handleValues} />
        </Col>
      </Row>
    </React.Fragment>
  );
}
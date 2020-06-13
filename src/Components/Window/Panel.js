import React, { useState } from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';

import Loader from './Loader';
import CoffeeButton from '../Controller/CoffeeButton';
import Slider from '../Controller/Slider';

import drinkTypes from '../../drinkTypes.json';

export default function Panel(props) {
  const coffeeMachine = new SweetCoffeeMachine();
  const [stock, setStock] = useState(coffeeMachine.getStock());
  const [sliderValues, setSliderValues] = useState({
    milk: 0,
    sugar: 0,
    chocolate: 0
  });
  const [isBusy, setIsBusy] = useState(false);
  const [busyWith, setBusyWith] = useState("");

  const styles = {
    container: css`
      bottom: 4.8em;
      right: 5.2em;
      height: 25.6em;
      width: 32.6em;
    `,
    buttons: css`
      height: 70%;
    `,
    sliders: css`
      height: 30%;
    `
  };

  // Cb functie voor de CoffeeButton
  const handleDrink = (name, baseReq) => {
    setIsBusy(true);
    setBusyWith(name);

    const isPrepared = coffeeMachine.prepareDrink(
      name, 
      stock, 
      baseReq.milk 
      ? baseReq.milk + sliderValues.milk > stock.milk ? stock.milk : baseReq.milk + sliderValues.milk
      : sliderValues.milk, 
      sliderValues.sugar, 
      baseReq.chocolate, 
      props.handleError
    )
  
    if (!!isPrepared) {
      const newMilk = stock.milk - sliderValues.milk;
      const newSugar = stock.sugar - sliderValues.sugar;
      const newChocolate = stock.chocolate - baseReq.chocolate;

      setStock({
        milk: newMilk,
        sugar: newSugar,
        chocolate: newChocolate
      });
    }

    /* Zet waarden op 0 wanneer de volledige stock is gebruikt. */
    sliderValues.milk >= stock.milk && handleSliderValues("milk", 0);
    sliderValues.sugar >= stock.sugar && handleSliderValues("sugar", 0);
    sliderValues.chocolate >= stock.chocolate && handleSliderValues("chocolate", 0);

    setTimeout(() => {
      setIsBusy(false);
    }, 100)
  };

  // Cb functie voor de Slider
  const handleSliderValues = (name, value) => {
    setSliderValues({
      ...sliderValues,
      [name]: value
    })
  };

  return (
    <Container fluid className={`position-absolute px-0 ${styles.container}`}>
      {!isBusy ?
        <React.Fragment>
          <Row className={`mx-1 mt-3 ${styles.buttons}`}>
            {(drinkTypes).map((value, index) => {
              let isDisabled = false;

              // Kijk of het drankje benodigdheden heeft
              if (value.requirements) {
                Object.entries(value.requirements).forEach(([key, requirement]) => {
                  // Disable een knop als de benodigde hoeveelheid kleiner is dan de voorraad
                  if (key in stock && stock[key] < requirement) {
                    isDisabled = true;
                  };
                })
              }
              return (
                <Col xs={4} key={index} className="mb-1">
                  <CoffeeButton 
                    name={value.name} 
                    key={value.id}
                    baseReq={value.requirements}
                    disabled={isDisabled}
                    handleDrink={handleDrink} />
                </Col>
              )
            })}
          </Row>
          <Row className={`mx-1 row d-flex align-content-center ${styles.sliders}`}>
            {Object.keys(stock).map((value, index) => {
              if (value !== "chocolate") {
                return (
                  <Slider 
                    name={value} 
                    key={index} 
                    stock={stock} 
                    handleSliderValues={handleSliderValues} />)
              } else {
                return false;
              }
            })}
          </Row>
        </React.Fragment>
        : <Loader drinkType={busyWith} /> }
    </Container>
  );
}
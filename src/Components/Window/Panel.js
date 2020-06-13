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
  const [requirements, setRequirements] = useState({
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
  const handleDrink = (name) => {
    setIsBusy(true);
    setBusyWith(name);

    const preparedDrink = coffeeMachine.prepareDrink(name, stock, requirements.milk, requirements.sugar, props.handleError)

    if (!!preparedDrink) {
      const newMilk = stock.milk - requirements.milk;
      const newSugar = stock.sugar - requirements.sugar;
      const newChocolate = stock.chocolate - requirements.chocolate;

      setStock({
        milk: newMilk,
        sugar: newSugar,
        chocolate: newChocolate
      });
    }

    /* Zet slider waarde op 0 wanneer de volledige stock is gebruikt.
    De slider wordt disabled en behoudt daarom de laatst bekende value */
    requirements.milk === stock.milk && handleRequirements("milk", 0);
    requirements.sugar === stock.sugar && handleRequirements("sugar", 0);

    setTimeout(() => {
      setIsBusy(false);
    }, 100)
  };

  // Cb functie voor de Slider
  const handleRequirements = (name, value) => {
    setRequirements({
      ...requirements,
      [name]: value
    })
  };

  return (
    <Container fluid className={`position-absolute px-0 ${styles.container}`}>
      {!isBusy ?
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
            {Object.keys(stock).map((value, index) => {
              if (value !== "chocolate") {
                return (<Slider name={value} key={index} stock={stock} cbFunction={handleRequirements} />)
              }
            })}
          </Row>
        </React.Fragment>
        : <Loader drinkType={busyWith} /> }
    </Container>
  );
}
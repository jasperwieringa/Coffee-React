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
  const [isBusy, setIsBusy] = useState(false);
  const [busyWith, setBusyWith] = useState("");
  const [requirements, setRequirements] = useState({
    milk: 0,
    sugar: 0,
    chocolate: 0
  });

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

  const handleDrink = (name) => {
    setIsBusy(true);
    setBusyWith(name);

    const preparedDrink = coffeeMachine.prepareDrink(name, stock, requirements.milk, requirements.sugar, props.handleError)

    if (!!preparedDrink) {
      setStock(prevStock => {
        const newSugar = (prevStock.sugar - "sugarCount");
		    const newMilk = (prevStock.milk - "milkCount");

        return  {
          milk: newMilk,
          chocolate: prevStock.chocolate,
          sugar: newSugar
        }
      });

      setTimeout(() => {
        setIsBusy(false);
      }, 4000)
    }
  };

  const handleRequirements = (event) => {
    const {name, value} = event.target;

    setRequirements({
      ...requirements,
      [name]: Number(value)
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
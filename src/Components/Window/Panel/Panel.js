import React, { useState } from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SweetCoffeeMachine from '../../Model/SweetCoffeeMock v.1.1';

import Loader from './Loader';
import CoffeeButton from '../../Controller/CoffeeButton'; 
import Slider from '../../Controller/Slider';

import drinkTypes from '../../../drinkTypes.json';

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
      baseReq.milk // Als er een basis hoeveelheid melk nodig is, pas dan de value aan (max 10 bij default waarden vanuit de SweetCoffeeMachine klasse)
      ? baseReq.milk + sliderValues.milk > stock.milk ? stock.milk : baseReq.milk + sliderValues.milk
      : sliderValues.milk, 
      sliderValues.sugar, 
      baseReq.chocolate,
      props.handleError
    )
  
    // Als het drankje klaar is, moet de stock worden bijgewerkt
    if (!!isPrepared) {
      setStock({
        milk: stock.milk - sliderValues.milk,
        sugar: stock.sugar - sliderValues.sugar,
        chocolate: stock.chocolate - baseReq.chocolate
      });
    }

    /* Zet waarden op 0 wanneer de volledige stock is gebruikt. */
    sliderValues.milk >= stock.milk && handleSliderValues("milk", 0);
    sliderValues.sugar >= stock.sugar && handleSliderValues("sugar", 0);
    sliderValues.chocolate >= stock.chocolate && handleSliderValues("chocolate", 0);

    setTimeout(() => {
      setIsBusy(false);
    }, 4000)
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
      {!isBusy ? // Laat de controllers zien wanneer er geen drankje wordt bereid
        <React.Fragment>

          {/* Drank knoppen */}
          <Row className={`mx-1 mt-3 ${styles.buttons}`}>
            {(drinkTypes).map((value, index) => {
              let isDisabled = false;

              /* Kijk of het drankje basisbenodigdheden heeft (zoals melk of chocolade) */
              if (value.requirements) {
                Object.entries(value.requirements).forEach(([key, requirement]) => {
                  /* Disable de knop als de benodigde hoeveelheid kleiner is dan de voorraad */
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
          
          {/* Sliders */}
          <Row className={`mx-1 row d-flex align-content-center ${styles.sliders}`}>
            {Object.keys(stock).map((value, index) => {
              if (value !== "chocolate" && value !== "water") {
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
        : <Loader drinkType={busyWith} /> // Laat het Loader component zien wanneer er een drankje wordt bereid
        } 
    </Container>
  );
}
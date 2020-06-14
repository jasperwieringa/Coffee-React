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
  const [isBusy, setIsBusy] = useState(false);
  const [busyWith, setBusyWith] = useState("");
  const [sliderValues, setSliderValues] = useState({
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

  /* Cb functie voor de stock */
  const handleStock = (newStock) => {
    setStock(newStock);
  };

  /* Cb functie voor de Slider */
  const handleSliderValues = (name, value) => {
    setSliderValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  };

  /* Cb functie voor de CoffeeButton */
  const handleDrink = (name, baseReq) => {
    setIsBusy(true); // Laat een laadscherm zien
    setBusyWith(name); // Laat Machine maakt <gekozen drank> tekst zien    

    /* Als een drankje als basis ingredient melk nodig heeft, 
    moet de hoeveelheid worden bepaald */
    let reqMilk = sliderValues.milk;  
    if (baseReq.milk) {
      reqMilk = baseReq.milk + sliderValues.milk > stock.milk
      ? stock.milk
      : baseReq.milk + sliderValues.milk
    }

    /* Maak het drankje (returned true of false) */
    const isPrepared = coffeeMachine.prepareDrink (
      name, // Naam van het drankje
      stock, // De huidige stock
      reqMilk, // Benodigde hoeveelheid melk
      sliderValues.sugar, // Benodigde hoeveelheid suiker
      baseReq.chocolate,  // Benodigde hoeveelheid chocolade
      props.bugMultiplier, // De multiplier voor het genereren van fouten
      props.handleError, // De cb functie vanuit de SweetCoffee.js
      handleStock // De cb functie voor het aanpassen van de stock
    )

    /* Zet de loader uit */
    if (isPrepared) {
      setTimeout(() => {
        setIsBusy(false);
      }, 4000)
    }

    /* Reset altijd de waarden van de sliders */
    handleSliderValues("milk", 0);
    handleSliderValues("sugar", 0);
  };

  return (
    <Container fluid className={`position-absolute px-0 ${styles.container}`}>
      {!isBusy ?
        <React.Fragment>
          <Row className={`mx-1 mt-3 ${styles.buttons}`}>
            {(drinkTypes).map((value, index) => {
              let isDisabled = false;

              /* Kijk of het drankje basisbenodigdheden heeft (zoals melk of chocolade) */
              if (value.requirements) {
                Object.entries(value.requirements).forEach(([key, requirement]) => {
                  /* Disable de knop als de benodigde hoeveelheid niet op voorraad is */
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
        : <Loader drinkType={busyWith} />
        } 
    </Container>
  );
}
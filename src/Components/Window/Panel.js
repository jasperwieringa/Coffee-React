import React, { useState, useRef } from 'react';
import { css } from 'emotion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import SweetCoffeeMachine from '../Model/SweetCoffeeMock v.1.1';
import Loader from './Loader';
import CoffeeButton from '../Controller/CoffeeButton';

import drinkTypes from '../../drinkTypes.json';

export default function Panel(props) {
  const coffeeMachine = new SweetCoffeeMachine();
  const [stock, setStock] = useState(coffeeMachine.getStock());
  const [isBusy, setIsBusy] = useState(false);
  const [busyWith, setBusyWith] = useState("");
  const [reqSugar, setReqSugar] = useState(0);
  const [reqMilk, setReqMilk] = useState(0);

  const sugarRef = useRef(0);
  const milkRef = useRef(0);

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
  }

  const handleDrink = (name) => {
    setIsBusy(true);
    setBusyWith(name);

    const preparedDrink = coffeeMachine.prepareDrink(name, stock, sugarRef.current.value, milkRef.current.value, props.handleError)

    if (!!preparedDrink) {
      setStock(prevStock => {
        const newSugar = (prevStock.sugar - sugarRef.current.value);
		    const newMilk = (prevStock.milk - milkRef.current.value);

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
  }

  return (
    <Container fluid className={`position-absolute px-0 ${styles.container}`}>
      {isBusy 
        ? <Loader drinkType={busyWith} /> 
        : 
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
              <Form.Label className="float-right">Suiker [{stock.sugar}%]</Form.Label>
              <Form.Control type="range" ref={sugarRef} value={reqSugar <= stock.sugar ? reqSugar : stock.sugar} disabled={stock.sugar === 0} onChange={(e) => setReqSugar(e.target.value)} />
            </Col>
            <Col xs={6}>
              <Form.Label className="float-right">Melk [{stock.milk}%]</Form.Label>
              <Form.Control type="range" ref={milkRef} value={reqMilk <= stock.milk ? reqMilk : stock.milk} disabled={stock.milk === 0} onChange={(e) => setReqMilk(e.target.value)} />
            </Col>
          </Row>
        </React.Fragment>}
    </Container>
  );
}
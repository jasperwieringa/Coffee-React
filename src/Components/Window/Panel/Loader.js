import React from 'react';
import { css } from 'emotion';

import alaminxyz from '../../../images/alaminxyz.gif';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Loader(props) {
  const styles = {
    row: css`
      bottom: 5em;
    `
  }

  return (
    <React.Fragment>
      <Image className="w-100 h-100" src={alaminxyz}/>
      <Row className={`position-relative text-center ${styles.row}`}>
        <Col xs={12}>
          <h5 className="position-relative">Machine maakt een {props.drinkType}, even geduld...</h5>
        </Col>
      </Row>
    </React.Fragment>
  )
}
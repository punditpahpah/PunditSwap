import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row, Button } from 'react-bootstrap';

//INTERNAL IMPORT
import Style from "./Token.module.css"
import images from "../../assets"
import { Toggle } from '../index';

const Token = ({ setOpenSetting }) => {
  return (
    <Container className={Style.Token}>
      <Row className={Style.Token_box}>
        <Col className={Style.Token_box_heading}>
          <h4>Settings</h4>
          <Image src={images.close} alt="close" width={50} height={50} onClick={() => setOpenSetting(false)} />
        </Col>
        <p className={Style.Token_box_param}>
          Slippage Tolerance{""}
          <Image src={images.lock} alt="lock" width={20} height={20} />
        </p>

        <Col className={Style.Token_box_input}>
          <Button>Auto</Button>
          <input type='text' placeholder='0.10%'></input>
        </Col>
        <p className={Style.Token_box_param}>
          Slippage Tolerance{""}
          <Image src={images.lock} alt="lock" width={20} height={20} />
        </p>

        <Col className={Style.Token_box_input}>
          <input type='text' placeholder='30'></input>
          <Button>minutes</Button>
        </Col>
        <h2>Interface Setting</h2>

        <Col className={Style.Token_box_toggle} >
          <p className={Style.Token_box_param_toggle}>Transaction deadline</p>
          <Toggle  label="No"/>

        </Col>

      </Row>

    </Container>
  )

};

export default Token

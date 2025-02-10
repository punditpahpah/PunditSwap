import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//INTERNAL IMPORT
import Style from "./Toggle.module.css"
import images from "../../assets"

const Toggle = ({ label }) => {
  return (
    <Container className={Style.Toggle}>
      <Row className={Style.Toggle_swith_box}>
        <input type='checkbox' className={Style.Toggle_checkbox} name={label} id={label} />
        <label className={Style.Toggle_label} htmlFor={label}>
          <span className={Style.Toggle_inner}></span>
          <span className={Style.Toggle_switch}></span>
        </label>
      </Row>
    </Container>
  )
}

export default Toggle

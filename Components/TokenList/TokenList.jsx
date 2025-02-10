import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


//INTERNAL IMPORT
import { Col, Container, Row } from 'react-bootstrap'
import Style from "./TokenList.module.css"
import images from "../../assets"

const TokenList = ({ setOpenTokenBox, tokenDate }) => {

  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container className={Style.TokenList}>
      <Row>
        <Col>
          <p className={Style.TokenList_close} onClick={() => setOpenTokenBox(false)}>
            <Image src={images.close} alt="close" width={50} height={50} />
          </p>
        </Col>
      </Row>

      <Row>
        <Col className={Style.TokenList_title}>
          <h2>Your Token List</h2>
        </Col>
      </Row>

      <Row>
        {data.map((el, i) => (
          <Col key={i} className={Style.TokenList_box} md={4}> {/* Adjust column size as needed */}
            <div className={Style.TokenList_box_info}>
              <p className={Style.TokenList_box_info_symbol}>
                HEY
              </p>

              <p>
                <span>34</span> GOLD COIN
              </p>
            </div>
          </Col>
        ))}
      </Row>
      
    </Container>
  );

}

export default TokenList

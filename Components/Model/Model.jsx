import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//INTERNAL IMPORT
import Style from "./Model.module.css"
import images from "../../assets"
import { Col, Container, Row } from 'react-bootstrap'


const Model = ({ setOpenModel, connectWallet }) => {

  const walletMenu = ["Metamask", "Coinbase", "Wallet", "WalletConnect"]
  return (
    <Container className={Style.Model} >
      <Row className={Style.Model_box} >


        <Col className={Style.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image src={images.close} alt="closeLogo" width={50} height={50} onClick={() => setOpenModel(false)} />
          </div>
        </Col>

        <Col className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()} >{el}</p>
          ))}
        </Col>

        <p className={Style.Model_box_para}>By connecting a wallet, you agree to Punditswap Labs* 
          <br/>and consent to its Privacy Policy and its Terms</p>

      </Row>
    </Container>
  )
}

export default Model

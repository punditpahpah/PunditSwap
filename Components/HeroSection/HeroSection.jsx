import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";
import { Container, Col, Row, Button } from "react-bootstrap";

const HeroSection = ({ accounts, tokenData }) => {
  //USESTATE

  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  //TOKEN 1

  const [TokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  //TOKEN 2

  const [TokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <Container className={Style.HeroSection} id={Style.body} >

      <Row className={Style.HeroSection_box}>
        <Col xs={4} className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.close}
              alt="close"
              width={50}
              height={50}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </Col>

        <Col xs={4} className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <Button onClick={() => setOpenToken(true)}>
            <Image
              src={images.image || images.etherlogo}
              alt="ether"
              width={20}
              height={20}
            />
            {TokenOne.name || "ETH"}
            <small>9474</small>
          </Button>
        </Col>

        <Col xs={4} className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <Button onClick={() => setOpenTokensTwo(true)}>
            <Image
              src={TokenTwo.image || images.etherlogo}
              alt="ether"
              width={20}
              height={20}
            />
            {TokenTwo.name || "ETH"}
            <small>9474</small>
          </Button>
        </Col>

        {accounts ? (
          <Button className={Style.HeroSection_box_btn}>
            {" "}
            Connect Wallet{" "}
          </Button>
        ) : (
          <Button className={Style.HeroSection_box_btn} onClick={() => { }}>
            Swap
          </Button>
        )}
      </Row>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && <SearchToken openToken={setOpenToken} tokens={setTokenOne} tokenData={tokenData} />}
      {openTokensTwo && <SearchToken openToken={setOpenTokensTwo} tokens={setTokenTwo} tokenData={tokenData} />}
    </Container>
  );
};

export default HeroSection;

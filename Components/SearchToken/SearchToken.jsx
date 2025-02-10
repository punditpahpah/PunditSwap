import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//INTERNAL IMPORT
import Style from "./SearchToken.module.css"
import Image from 'next/image'
import images from "../../assets"

const SearchToken = ({ openToken, tokens, tokenData }) => {

  const [active, setActive] = useState(1);

  const coin = [
    {
      img: images.etherlogo,
      name: "ETH",
    },
    {
      img: images.etherlogo,
      name: "DAI",
    },
    {
      img: images.etherlogo,
      name: "BTC",
    },
    {
      img: images.etherlogo,
      name: "ETH",
    },
    {
      img: images.etherlogo,
      name: "UNI",
    },
    {
      img: images.etherlogo,
      name: "CAKE",
    },
    {
      img: images.etherlogo,
      name: "TON",
    },
    {
      img: images.etherlogo,
      name: "NOG",
    },
    {
      img: images.etherlogo,
      name: "DOG",
    },
    {
      img: images.etherlogo,
      name: "CAT",
    },
  ]

  return (
    <Container className={Style.SearchToken}>
      <Row className={Style.SearchToken_box}>

        <Col className={Style.SearchToken_box_heading}>
          <h4>Select Token</h4>
          <Image src={images.close} alt="close" width={50} height={50} onClick={() => openToken(false)} />
        </Col>

        <Col className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="search" width={20} height={20} />
          </div>

          <input type='text' placeholder='search name and paste address'></input>
        </Col>

        <Col className={Style.SearchToken_box_token}>
          {coin.map((el, i) => (
            <span key={i + 1} className={active === i + 1 ? `${Style.active}` : "" } onClick={() => (setActive(i + 1), tokens({ name: el.name, img: el.img }))}>
              <Image src={el.img || images.ether} alt="image" width={30} height={30} />
              {el.name}
            </span>
          ))}
        </Col>

      </Row>
    </Container>
  )
}

export default SearchToken

import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// INTERNAL IMPORT
import Style from "./NavBar.module.css"
import images from "../../assets"
import { Model, TokenList } from '../index'
import { Container, Row, Col, Button, Modal } from "react-bootstrap";


const Navbar = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(false);

  const logoMenu = [
    { name: "Home", link: "/" },
  ];

  const menuItems = [
    { name: "Swap", link: "swap" },
    { name: "Tokens", link: "tokens" },
    { name: "Pools", link: "pools" },
  ];

  return (
    <Container fluid className={Style.NavBar}>
      <Row className={`${Style.NavBar_box} align-items-center justify-content-between`}>

        {/* LEFT SECTION */}
        <Col xs="auto" className={Style.NavBar_box_left}>
          {/* Logo Image */}
          <div className={Style.NavBar_box_left_img}>
            {logoMenu.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.name}`, query: `${el.link}` }}>
                <Image src={images.logo} alt="logo" width={50} height={50} />
              </Link>
            ))}
          </div>

          {/* Menu Items */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.name}`, query: `${el.link}` }}>
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </Col>

        {/* MIDDLE SECTION - Search */}
        <Col xs="auto" className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            <input type="text" placeholder="Search Tokens" className={Style.NavBar_box_middle_search_input} />
          </div>
        </Col>

        {/* RIGHT SECTION */}
        <Col xs="auto" className={Style.NavBar_box_right}>
          {/* Network Display */}
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" width={30} height={30} />
            </div>
            <p>Network</p>
          </div>

          {/* Model Component */}
          {
            account ? (
              <Button className={Style.NavBar_button} onClick={() => setOpenModel(true)}>Connect</Button>
            ) : (
              <Button className={Style.NavBar_button} onClick={() => setOpenTokenBox(true)}>0xde004544...</Button>
            )}
          {openModel && < Model setOpenModel={setOpenModel} connectWallet="connect" />}
        </Col>
      </Row>

      {/* TokenList Component */}
      {openTokenBox && <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />}
    </Container>
  );
};

export default Navbar;
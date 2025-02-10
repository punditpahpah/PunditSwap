import React, { useState, useEffect, useContext } from 'react'

//INTERNAL IMPORT
import { HeroSection } from "../Components/index"
import { Container, Col, Row } from 'react-bootstrap'


const Home = () => {
  return (
    <Container>
      <HeroSection accounts="hey" tokenData="DATA" />
    </Container>
  )
}

export default Home

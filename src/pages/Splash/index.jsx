import React from 'react'
import { Button, Row, Col, Container, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CircleLogo from '../../components/CircleLogo'

const Style = {
  header: {
    letterSpacing: '.75rem',
    textAlign: 'center',
    fontSize: '4rem'
  },
  jumbo: {
    height: '150vh'
  },
  button: {
    width: 175
  }
}

export default function Splash (props) {
  return (
    <Container fluid='md' className='text-center'>
      <Jumbotron id='main' style={Style.jumbo}>
        <h1 style={Style.header}>Sheard & Drugge</h1>
        <Row>
          <Col lg={4}>
            <Link href='/home'>
              <Button style={Style.button}>Covid-19 Response</Button>
            </Link>
          </Col>

          <Col lg={4}>
            <Link href='/home'>
              <Button style={Style.button}>Patient Safety</Button>
            </Link>
          </Col>
          <Col lg={4}>
            <Link href='/home'>
              <Button style={Style.button}>Contact Us</Button>
            </Link>
          </Col>
        </Row>

        <CircleLogo />
        <hr />
        <h4>Welcome to the Sheard & Drugge TeleDermatology Site</h4>
        <hr />
      </Jumbotron>
    </Container>
  )
}

import React, { Fragment } from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { Button, Row, Col, Container, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RFFormat from '../../components/SimpleForm'
import CircleLogo from '../../components/CircleLogo'

const Style = {
  header: {
    letterSpacing: '.75rem',
    textAlign: 'center',
    fontSize: '4rem'
  },
  jumbo: {
    height: '500vh'
  }
}

const TeleDerm = ({ handleFormSubmit, values, props }) => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <Container fluid='md' className='text-center'>
        <Jumbotron id='main' style={Style.jumbo}>
          <h1 style={Style.header}>Sheard & Drugge</h1>
          <Row>
            <Col lg={4}>
              <Link href='/snd-covid-19'>
                <Button style={Style.button}>Covid-19 Response</Button>
              </Link>
            </Col>

            <Col lg={4}>
              <Link href='/snd-patient-safety'>
                <Button style={Style.button}>Patient Safety</Button>
              </Link>
            </Col>
            <Col lg={4}>
              <Link href='/snd-contact'>
                <Button style={Style.button}>Contact Us</Button>
              </Link>
            </Col>
          </Row>

          <CircleLogo />
          <hr />
          <h4>Welcome to the Sheard & Drugge TeleDermatology Site</h4>
          <hr />
          <RFFormat user={user} />
        </Jumbotron>
      </Container>
    </Fragment>
  )
}

export default TeleDerm

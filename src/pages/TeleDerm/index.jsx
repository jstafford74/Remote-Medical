import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
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
  // const [sent, setSent] = useState(false)
  // const [error, setError] = useState(false)

  // const handleFormSubmiss = (values, event) => {
  //   console.log(event.target)
  //   const parameters = {
  //     FirstName: values.FirstName,
  //     LastName: values.LastName,
  //     email_s: values.email_s,
  //     dob: values.dob,
  //     tderm_image: values.tderm_image.name
  //   }
  //   emailjs
  //     .send(
  //       'gmail',
  //       'template_id',
  //       parameters,
  //       'user_id'
  //     )
  //     .then(
  //       result => {
  //         setSent(true)
  //         console.log(result.text)
  //       },
  //       error => {
  //         setError(true)
  //         console.log(error.text)
  //       }
  //     )
  // }

  return (
    <Provider store={store}>
      <Fragment>
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
            <RFFormat />
          </Jumbotron>
        </Container>
      </Fragment>
    </Provider>
  )
}

export default TeleDerm

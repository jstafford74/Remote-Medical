import React from 'react'
import { Button, Row, Col, Container, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Style = {
  header: {
    letterSpacing: '.75rem',
    textAlign: 'center',
    fontSize: '4rem'
  },

  button: {
    width: 175
  }
}

export default function Splash (props) {
  // // useEffect(() => {
  //   lock.show()
  //   lock.on('authenticated', function (authResult) {
  //     setLoggedIn(true)
  //     setToken(authResult.accessToken)
  //     alert(token)
  //   })
  // }, [token])

  return (
    <Container fluid='md' className='text-center'>
      <Jumbotron id='main'>
        <h1 style={Style.header}>Remote Medical </h1>
        <h3 style={{ color: 'red' }}>
          <i className='fas fa-star-of-life fa-7x'></i>
        </h3>

        <hr />
        <h4 className='font-weight-bold'>
          Welcome to Remote Medical Treatment
        </h4>
        <hr />
        <h5 className='text-left'>
          This web portal was created in 48 hrs with a dual purpose of
          submitting a project proposal to the DEVPOST{' '}
          <a href='https://covid-global-hackathon.devpost.com/'>
            COVID-19 Global Hackathon{' '}
          </a>
          and to highlight an important medical device that can protect
          healthcare workers and assist with stemming the spread of COVID-19.{' '}
        </h5>
        <hr />
        <h4 className='text-left font-weight-bold'>Two Primary Goals</h4>
        <h5 className='text-left'>
          {' '}
          Rebuild and ensure the continuum of doctor care by removing uncessary
          appointment bottlenecks and reducing the risk of infection to both
          healthcare workers and patients.
        </h5>
        <br />
        <h5 className='text-left'>
          Deploy a proven technology that has been successfully documented and
          used for the early detection of skin cancer in order to protect all
          stakeholders in the high risk handshake between a medical professional
          and a potentilly infected person.{' '}
        </h5>
        <hr />
        <h4 className='text-left font-weight-bold'>
          Web Application For Remote Regular Care
        </h4>
        <h5 className='text-left mb-1'>
          {' '}
          Video conferencing and existing mobile applications that can link a
          patient & doctor serve an important purpose. But as of yet, these
          mediums have increased office bottlenecks and/or fail to resume demand
          or eliminate risk of infection. The Remote Medical application uses
          encrypted image transmission to give the clinical staff an early view
          of their patient who is requesting care. With this image the staff can
          quickly and accurately determine if a call, conference, prescription
          refill or in-person meet should take place. Having the secure image
          linked to existing in-house patient data gives the best possible
          risk/reward outcome by allowing the doctor to put context into the
          situation while maitaining a 'safe-distance'. Remote Medical utilizes
          Auth0 authentication protocols and intelligent database design to
          authorize and then authenticate a patient. Once authorized the patient
          will receive a secure link to a basic form that takes a note and at
          least one image. The image name and content is encrypted and 'chunked'
          into small sizes before it is securely stored in a MongoDB database
          that can only be seen by the doctor's office. Once uploaded into the
          database the clinical staff will have a tabular CRM-like view of
          patient form submissions('events') with their respective images.
        </h5>
        <hr />
        <h4 className='text-left font-weight-bold'>Melanoscan</h4>
        <h5 className='text-left'>
          Melanoscan is a lightweight, portable and state of the art scanning
          device that has been successfully implemented for the early detection
          of skin cancer in Stamford, CT for 15 years. It is a total immersion
          photo/video device that is patented and has a short-range whole body
          telemedicine system for enhanced medical evaluations. This radiology
          like scanning service enables a handsfree mode to automate the
          acquisition and distribution of high-quality physical examinations.
          Utilizing a secure wireless network, the Melanoscan camera arrays
          surround the body and simultaneously capture images that are securely
          stored and then analyzed for variations in pigment and changes in spot
          sizes through time. Through the development process Dr. Rhett Drugge,
          M.D. and his team have assembled the technology to quickly grab both
          the image and associated data extracted through popular vision API's
          in order to track and train sophisticated analytics. This device has a
          short relative lead time and can quickly be deployed anywhere. With
          the images and anlaytics in a standardized format, models can be
          quickly built to assess the liklihood a patient has or does not have
          COVID-19. The Melanoscan device should serve on the front-lines of
          patient scans to create the 'safest-distance' and protect our
          healthcare workers at all costs.
        </h5>
        <hr />
        <Row>
          <Col>
            <h3>
              <i className='fab fa-react'></i>
            </h3>
          </Col>
          <Col>
            <h3>
              <i className='fab fa-node-js'></i>
            </h3>
          </Col>
          <Col>
            <h3>
              <span
                className='iconify'
                data-icon='simple-icons:mongodb'
                data-inline='false'
              ></span>
            </h3>
          </Col>
          <Col>
            <h3>
              <span
                class='iconify'
                data-icon='logos:auth0'
                data-inline='false'
              ></span>
            </h3>
          </Col>
        </Row>
        <Link to='/rmt'>
          <Button className='btn btn-lg btn-danger'>Demo RMT</Button>
        </Link>
      </Jumbotron>
      {/* {loggedIn ? <RFFormat /> : null} */}
    </Container>
  )
}

import React from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
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
        {/* <h3>
          <i class='fas fa-laptop-medical fa-7x'></i>
        </h3>
        <h3>
          <i class='fas fa-user-md fa-7x'></i>
        </h3> */}
        <h3 style={{ color: 'red' }}>
          <i className='fas fa-star-of-life fa-7x'></i>
        </h3>
        <i style={{ color: 'red' }} className='fas fa-star-of-life fa-2x'></i>
        <hr />
        <h4 className='font-weight-bold'>
          Welcome to Remote Medical Treatment
        </h4>
        <hr />
        <h5 className='text-left'>
          This web portal as created in direct reponse to the 2020 outbreak of
          covid-19. As social distancing has become the norm and the number of
          confirmed covid-19 cases in the United States accelerate, I decided to
          augment an existing offsite medical treatment project with both
          authorized and authenticated login procedures that incorporate a
          passwordless feature. This feature ensures a quick and secure method
          to deliver remote medical treatment to anyone that exists in an
          'authorized for medical treatment' database.{' '}
        </h5>
        <hr />
        <h4 className='font-weight-bold'>How Does it Work?</h4>
        <h5 className='text-left'>
          This is a simple & secure bilateral communication between a patient
          and dpctor. The office that provides medical treatment will supply a
          minimal 'authorized for medical treatment' database that includes
          first, last, email and DOB for each potential remote patient. The
          patient upon visiting the site will be asked to provide this basic
          information. If the patient exists in the database, they will be sent
          an encrpted password link that directs them to a brief questionaire.
          Along with the aforementioned basic information, notes about the
          nature of their complaint and a picture can be provided and securely
          sent to the doctor's office.
        </h5>
        <hr />
        <h4 className='font-weight-bold'>Security</h4>
        <h5 className='text-left'>
          Built upon Auth0 libraries, this site provides HIPAA compliant login
          procedures. PHI, or Personal Health Information, is the focus of HIPAA
          regulations. Specific to this web portal, conversations about your
          health and between you and your doctor are protected and meant to be
          private at all times. In order to comply with HIPAA law, an office or
          associate is required to:
        </h5>
        <ol className='text-left'>
          <li>Have safeguards so that PHI data is always protected</li>
          <li>
            Restrict access to PHI data to only those people needed to
            accomplish the intended purpose.
          </li>
          <li>
            Have agreements(BAA's) in place with service providers to ensure
            security.
          </li>
          <li>
            Have procedures and policies to limit access to PHI data and
            training in place to teach employees about security and privacy.
          </li>
        </ol>
        <h5 className='text-left'>
          Specific to this B2C solution, once a BAA is in place, only two
          elements need to be addressed:{' '}
          <span className='font-weight-bold'>Automatic Logoff</span> &{' '}
          <span className='font-weight-bold'>Authenticated Login</span>. Because
          Auth0 uses JWT encryption(JSON Web Token) an expiration/timeout is
          required within the JWT infrastructure. This is a customizable feature
          but is recommended to last no longer than 30 minutes.{' '}
        </h5>
        <hr />
        <Link to='/rmt'>
          <Button className='btn btn-lg btn-danger'>Demo RMT</Button>
        </Link>
      </Jumbotron>
      {/* {loggedIn ? <RFFormat /> : null} */}
    </Container>
  )
}

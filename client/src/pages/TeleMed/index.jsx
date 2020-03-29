import React, { Fragment } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import RFFormat from '../../components/SimpleForm'

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

const TeleMed = ({ handleFormSubmit, values, props }) => {
  return (
    <Fragment>
      <Container fluid='md' className='text-center'>
        <Jumbotron id='main' style={Style.jumbo}>
          <h1 style={Style.header}>Remote Medical Treatment</h1>
          <h3 style={{ color: 'red' }}>
            <i className='fas fa-laptop-medical fa-5x'></i>
          </h3>
          <hr />
          <h4>Welcome to Remote Medical Treatment</h4>
          <hr />
          <RFFormat />
        </Jumbotron>
      </Container>
    </Fragment>
  )
}

export default TeleMed

import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

import BasicForm from '../../components/BasicForm'

const Style = {
  header: {
    letterSpacing: '.75rem',
    textAlign: 'center',
    fontSize: '4rem'
  },
  jumbo: {
    height: '500vh'
  },
  button: {
    width: 175
  }
}

export default function Demo (props) {
  return (
    <Container fluid='md' className='text-center'>
      <Jumbotron id='main'>
        <h1 style={Style.header}>Remote Medical </h1>
        <h3 style={{ color: 'red' }}>
          <i className='fas fa-star-of-life fa-7x'></i>
        </h3>
        <hr />
        <BasicForm />
      </Jumbotron>
    </Container>
  )
}

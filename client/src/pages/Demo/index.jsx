import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Container, Jumbotron } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import BasicForm from '../../components/BasicForm'
// import API from '../../utils/API'

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
        {/* <h3>
          <i class='fas fa-laptop-medical fa-7x'></i>
        </h3>
        <h3>
          <i class='fas fa-user-md fa-7x'></i>
        </h3> */}
        <h3 style={{ color: 'red' }}>
          <i className='fas fa-star-of-life fa-7x'></i>
        </h3>
        <hr />
        <BasicForm />
      </Jumbotron>
      {/* {loggedIn ? <RFFormat /> : null} */}
    </Container>
  )
}

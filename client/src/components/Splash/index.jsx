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
  
        <hr />
        <h4 className='font-weight-bold'>Image File Uploader</h4>
        <hr />
        <h5 className='text-left'>
          This is a smaller project of Remote Medical Treatment highighting and
          demonstarting the ability to upload, store and retrieve images from
          MongoDB.{' '}
        </h5>
        <hr />

        <Link to='/demo'>
          <Button className='btn btn-lg btn-danger'>RMT Image Uploader</Button>
        </Link>
      </Jumbotron>
    </Container>
  )
}
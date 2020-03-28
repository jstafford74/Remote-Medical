import React from 'react'
import { Container, Navbar, Col } from 'react-bootstrap'

const Style = {
  navLink: {
    color: 'white',
    fontSize: '1.5rem'
  },
  navButton: {
    marginTop: '10px'
  }
}

const StickyNav = props => {
  return (
    <Container fluid='md'>
      <Navbar
        variant='dark'
        bg='dark'
        collapseOnSelect
        expand='lg'
        sticky='top'
      >
        <Col lg={4} className='d-md'>
          <Navbar.Brand style={Style.navLink} href='/'>
            Secure Web Medical Portal
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls='respnav' />
      </Navbar>
    </Container>
  )
}

export default StickyNav

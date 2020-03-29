import React from 'react'
import { Container, Navbar, Col } from 'react-bootstrap'

const Style = {
  navLink: {
    color: 'black',
    fontSize: '1.5rem',
  },
  navButton: {
    marginTop: '10px'
  }
}

const StickyNav = props => {
  return (
    <Container fluid='md sm'>
      <Navbar
        variant='light'
        bg='light'
        collapseOnSelect
        expand='lg sm md'
        sticky='top'
      >
        <Col lg={4} className='d-md text-center'>
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

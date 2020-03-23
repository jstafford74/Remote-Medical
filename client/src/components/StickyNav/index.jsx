import React from 'react'
import {
  Container,
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Col
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
// import { useAuth0 } from '../../react-auth0-spa'

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
  // const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin
  //   })
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

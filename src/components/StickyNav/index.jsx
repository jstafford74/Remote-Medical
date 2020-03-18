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
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../react-auth0-spa'

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
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    })
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
            Sheard & Drugge TeleDermatology
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls='respnav' />
        <Navbar.Collapse id='respnav' className='justify-content-end'>
          <Nav fill>
            {!isAuthenticated && (
              <Nav.Item style={Style.navItem}>
                <Button
                  id='qsLoginBtn'
                  color='primary'
                  className='btn-margin'
                  onClick={() => loginWithRedirect({})}
                >
                  Log in
                </Button>
              </Nav.Item>
            )}
            {isAuthenticated && (
              <NavDropdown title={user.name} id='collasible-nav-dropdown'>
                <Navbar.Brand bg='dark'>
                  <img
                    src={user.picture}
                    alt='Profile'
                    className='nav-user-profile rounded-circle'
                    width='50'
                  />
                </Navbar.Brand>
                <NavDropdown.Item>
                  <FontAwesomeIcon icon='user' className='mr-3' /> Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  id='qsLogoutBtn'
                  onClick={() => logoutWithRedirect()}
                >
                  <FontAwesomeIcon icon='power-off' className='mr-3' /> Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default StickyNav

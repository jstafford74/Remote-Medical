import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Navbar, NavDropdown, Nav, Col } from "react-bootstrap";
import { useAuth0 } from "../react-auth0-spa";

const StickyNav = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  const Style = {
    // nav: {
    //   backgroundColor: "white",
    //   fontSize: "1.25rem",
    //   color: "black"

    // },
    navLink: {
      color: "white",
      fontSize: "1.5rem"
    },
    navButton: {
      marginTop: "10px"
    }
  };

  return (
    <div className="nav-container">
      <Navbar
        variant="dark"
        bg="primary"
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Col lg={4}>
          <Navbar.Brand style={Style.navLink} href="/">
            Sheard & Drugge TeleDermatology
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="respnav" />
        <Navbar.Collapse id="respnav" className="justify-content-end">
          <Nav fill>
            <Nav.Item style={Style.navItem}>
              <Link to="/" exact="true">
                Home
              </Link>
            </Nav.Item>
            {isAuthenticated && (
              <Nav.Item style={Style.navItem}>
                <Link to="/telederm" exact="true">
                  TeleDermatology Form
                </Link>
              </Nav.Item>
            )}
            {!isAuthenticated && (
              <Nav.Item style={Style.navItem}>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  className="btn-margin"
                  onClick={() => loginWithRedirect({})}
                >
                  Log in
                </Button>
              </Nav.Item>
            )}
            {isAuthenticated && (
              <NavDropdown title={user.name} id="collasible-nav-dropdown">
                <Navbar.Brand bg="dark">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                  />
                </Navbar.Brand>
                <NavDropdown.Item>
                  <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="qsLogoutBtn"
                  onClick={() => logoutWithRedirect()}
                >
                  <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default StickyNav;

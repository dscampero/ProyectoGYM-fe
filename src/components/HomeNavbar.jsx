import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/logoRBDnavbar.png";

const HomeNavbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow"
        style={{ backgroundColor: "#10c3d9", fontWeight: "bold" }}
      >
        <Container>
          <img
            className="image-fluid me-4"
            src={logo}
            style={{ boxShadow: 'inherit' }}
            alt="Homelogo"
            id='navbarLogo'
          ></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className='me-2' style={{ color: "white" }} href="#features">
                ASOCIATE
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="#pricing">
                SACÁ TURNO
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="#pricing">
                CLASES
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="#pricing">
                NOSOTROS
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="#pricing">
                CONTACTO
              </Nav.Link>
            </Nav>
            <Nav>
            <Button className='navbarButton' variant="danger">YA SOY SOCIO</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;

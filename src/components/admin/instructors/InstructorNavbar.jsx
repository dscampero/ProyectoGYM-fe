import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../../assets/logoRBDnavbar.png"

const InstructorNavbar = () => {
  return <>
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
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto">
              <Nav.Link  className='me-2' style={{ color: "white" }} href='/admin/usuarios'>
                MIS CLASES
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="/admin/instructores">
                RUTINAS
              </Nav.Link>
              <Nav.Link className='me-2' style={{ color: "white" }} href="/admin/consultas">
                CONSULTAS
              </Nav.Link>
            </Nav>
            <Nav>
            <Button className='navbarButton' variant="danger">CERRAR SESIÓN</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>;
};

export default InstructorNavbar;

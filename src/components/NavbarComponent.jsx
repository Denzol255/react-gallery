import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand={false} fixed='top'>
        <Container fluid>
          <Navbar.Brand href='#'>React Gallery</Navbar.Brand>
          <Navbar.Toggle backdrop='false' aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='start'
            backdrop={false}>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#'>Галерея</Nav.Link>
                <Nav.Link href='/about'>Обо мне</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

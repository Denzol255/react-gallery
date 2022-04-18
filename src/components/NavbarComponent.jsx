import React, { useState } from "react";
import { Nav, Navbar, Container, Offcanvas, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../images/avatar.png";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg='dark' variant='dark' expand={false} fixed='top'>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>React Gallery</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={handleShow} aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          scroll='true'
          onHide={handleClose}
          show={show}
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='start'>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to='/'>
                <Nav.Link onClick={handleClose}>Галерея</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link onClick={handleClose}>Обо мне</Nav.Link>
              </LinkContainer>
            </Nav>
            <Image className='mt-4' src={avatar} roundedCircle></Image>
            <div>Денис Золотарев</div>
            <a href='mailto:denzoloto@gmail.com'>denzoloto@gmail.com</a>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

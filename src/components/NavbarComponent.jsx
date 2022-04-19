import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  hideModalAction,
  showModalAction,
} from "../store/action-creators/action-creators";
import Info from "./Info";

const NavbarComponent = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  return (
    <Navbar bg='dark' variant='dark' expand={false} fixed='top'>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>React Gallery</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          onClick={() => dispatch(showModalAction())}
          aria-controls='offcanvasNavbar'
        />
        <Navbar.Offcanvas
          onHide={() => dispatch(hideModalAction())}
          show={modal}
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='start'>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to='/'>
                <Nav.Link onClick={() => dispatch(hideModalAction())}>
                  Галерея
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link onClick={() => dispatch(hideModalAction())}>
                  Обо мне
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Info />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

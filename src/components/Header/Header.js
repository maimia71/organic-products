import React from "react";
import "./Header.css";
import HeaderIcon from "../../assets/header_icon.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import HeaderBody from "./HeaderBody";

function Header() {
  return (
    <>
      <Navbar className="navbar" expand="md">
        <Container style={{ border: "" }}>
          <Navbar.Brand
            className="navbar__brand"
            href="#home"
            style={{ border: "" }}
          >
            <img src={HeaderIcon} alt="not found" />
            <h2>
              {" "}
              <strong>Organic</strong>{" "}
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ border: "" }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link className="navbar__contact__button" href="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <HeaderBody />
    </>
  );
}

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../data/Xavier-Joseph-Manaloto.pdf";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">XJ|Manaloto</Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#Container">Send me an Email</Nav.Link>
            <Nav.Link href={resume} download="MyResume.pdf">
              Download my Portfolio
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

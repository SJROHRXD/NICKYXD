import { NavLink } from "react-router-dom";
import { Container, Navbar as Navvy, Nav } from "react-bootstrap";
import { ButtonSpecial } from "./buttonspecialcomp/ButtonSpecial";

export function Navbar() {
  return (
    <Navvy sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/resume" as={NavLink}>
            Resume
          </Nav.Link>
          <Nav.Link to="/references" as={NavLink}>
            References
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
        <ButtonSpecial />
      </Container>
    </Navvy>
  );
}

import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <Navbar expand="lg" className={`bg-dark py-1 shadow fixed-top`}>
      <Container>
        <Navbar.Brand href="#" className={`${styles.logo} fw-bold fs-1 text-white`}>
          CARZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <Nav.Link href="/" className="text-white mx-2">Home</Nav.Link>
            <Nav.Link href="/Tour" className="text-white mx-2">Brands</Nav.Link>
            <Nav.Link href="/Guides" className="text-white mx-2">Destination</Nav.Link>
            <Nav.Link href="/Contact" className="text-white mx-2">Contact</Nav.Link>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <Nav.Link
              className="text-white rounded-5 border px-3 border-white"
              href="/Login"
            >
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

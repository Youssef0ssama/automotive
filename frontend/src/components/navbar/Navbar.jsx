import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <Navbar expand="lg" className={`bg-dark py-1 shadow fixed-top`}>
      <Container>
        <Navbar.Brand
          href="/"
          className={`${styles.logo} fw-bold fs-1 text-white`}
        >
          CARZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className=" mb-2 mb-lg-0">
            <Nav.Link href="/" className="text-white mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/brands" className="text-white mx-2">
              Brands
            </Nav.Link>
            <Nav.Link href="/Contact" className="text-white mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

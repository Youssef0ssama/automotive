import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className={`${styles.footer_brand}`}>
          <Col md={8}>
            <h3 className={`fw-bold fs-1`}>CARZ</h3>
          </Col>
          <Col md={4} className="text-end">
            <p className="fw-medium m-0">Drive Your Dreams , Where quality meets the road.</p>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>Vehicles</li><br />
              <li>Shopping Assist</li><br />
              <li>Inventory</li><br />
              <li>CARZ Innovation</li><br />
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Contact us</h5>
            <ul className="list-unstyled">
              <li>Website</li><br />
              <li>Email</li><br />
              <li>WhatsApp</li><br />
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Office</h5>
            <p className="mb-1">
              Alexandria , Egypt
            </p><br />
            <p>+ (012) 234-5678</p><br />
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Follow us</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
              </li><br />
              <li>
                <FontAwesomeIcon icon={faFacebook} size="lg" /> Facebook
              </li><br />
              <li>
                <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
              </li><br />
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

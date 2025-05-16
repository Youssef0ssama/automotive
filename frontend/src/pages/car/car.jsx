import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bmwi8 from "../../assets/images/BMW_i8.png"; // Keeping import in case you want to use it later

const Car = () => {
  return (
    <div className="bg-black text-white py-5 mt-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <p style={{ letterSpacing: "2px", color: "#999" }}>
              ACCELERATING THE FUTURE
            </p>
            <h2 style={{ fontWeight: "bold" }}>
              BMW i8 - 2025 modern <br /> V8 Vintage
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12} md={6}>
            <img src={bmwi8} alt="Ford Mustang 1967" className="img-fluid" />

            <Card className="mt-4 shadow-sm bg-dark text-white rounded-3" >
              <Card.Body>
                <Row>
                  <Col>
                    <strong>Engine</strong>
                    <div>3745 CC</div>
                    <small>3.0L</small>
                  </Col>
                  <Col>
                    <strong>Power Output</strong>
                    <div>320</div>
                    <small>BHP</small>
                  </Col>
                  <Col>
                    <strong>Transmission</strong>
                    <div>6 Speed</div>
                    <small>TC-SST</small>
                  </Col>
                  <Col>
                    <strong>Cylinder</strong>
                    <div>8</div>
                    <small>V8</small>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Car;

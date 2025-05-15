import styles from "./Home.module.css";
import carImage from "../../assets/images/h car.png";
import { Container, Button, Row, Col } from "react-bootstrap";


function Home() {
  return (
    <div>
      {/* 🔷 Overseas Hero Section */}
      <div
        className={`${styles.header} bg-dark text-white d-flex align-items-center justify-content-center`}
      >
        <Container className="text-center">
          <h1 className="display-4">WELCOME TO OVEROADS</h1>
          <p className="lead">
            Where you can explore and find anything about cars
          </p>
          <Button variant="light" className="px-4 py-2">
            FOR MORE
          </Button>
        </Container>
      </div>

      {/* 🔷 Car Section */}
      <Row
        className={`${styles.hero} bg-dark text-white d-flex align-items-center justify-content-start`}
      >
        <Col md={6} className={styles.rectangle}>
          <img src={carImage} alt="Car" className={styles.carImage} />
        </Col>
        <Col md={6} className={`${styles.text} text-white `}>
          Buy Your Next <span>Modern</span> Car
        </Col>
      </Row>
    </div>
  );
}

export default Home;

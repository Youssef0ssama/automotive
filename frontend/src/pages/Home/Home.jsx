import styles from "./Home.module.css";
import carImage from "../../assets/images/h car.png";
import { Container, Button, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div
        className={`${styles.header} bg-dark text-white d-flex align-items-center justify-content-center`}
      >
        <Container className="text-center">
          <h1 className="display-4">WELCOME TO OVEROADS</h1>
          <p className="lead">
            Where you can explore and find anything about cars
          </p>
          <Button
            variant="light"
            className={`${styles.button} px-4 py-2 fw-bold border-0`}
            href="/brands"
          >
            FOR MORE
          </Button>

        </Container>
      </div>

      <Row
        className={`${styles.hero} bg-black text-white d-flex align-items-center justify-content-start position-relative`}
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

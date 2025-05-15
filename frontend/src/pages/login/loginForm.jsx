import React from "react";
import styles from "./loginForm.module.css";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function LoginForm() {
  return (
    <div className="bg-dark text-white">
      <Container className=" py-5 text-center">
        <h1 className={`fw-bold pb-3 ${styles.title}`}>Log In</h1>
        <Col className="fw-normal">We're glad to see you again!</Col>
        <br />
        <Col className="fw-normal">
          Don't have an account?{" "}
          <Button variant="link" href="#" className={styles.signUpLink}>
            Sign Up!
          </Button>
        </Col>

        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <div className={`border rounded p-5 mt-5 ${styles.formContainer}`}>
              <Form className="pb-4">
                <Form.Group controlId="email" className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    required
                    className={styles.inputField}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.inputField}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center pb-3">
                  <Form.Check type="checkbox" label="Remember" id="remember" />
                  <Button variant="link" href="/" className={styles.lostLink}>
                    Lost your password?
                  </Button>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.loginButton}
                >
                  Log In
                </Button>
              </Form>

              <div
                className={`pb-3 d-flex align-items-center ${styles.orContainer}`}
              >
                <span className={styles.line}></span>
                <p className={`mx-3 mb-0 ${styles.or}`}>OR</p>
                <span className={styles.line}></span>
              </div>

              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  className={styles.facebookButton}
                >
                  Continue with Facebook
                </Button>
                <Button
                  variant="outline-danger"
                  className={styles.googleButton}
                >
                  Continue with Google
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;

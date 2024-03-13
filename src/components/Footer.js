import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright text-center">
          <h3>Copyright © {year} Sukrut Rahane</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import icon1 from "../1images/icon1.png";
import "../Navbar/Navbar.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <section>
        <Container fluid>
          <Row className="navbartop">
            <Col lg="9" md="9" sm="8" xs="7" className="heading1">
              <h1 className="headingone">Nav Bar</h1>
            </Col>
            <Col lg="3" md="3" sm="4" xs="5" className="iconmaind">
              <div className="icondiv">
                <img src={icon1} />
                <p>Pamela Castillo</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

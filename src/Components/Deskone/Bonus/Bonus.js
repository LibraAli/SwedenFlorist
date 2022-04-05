import React from "react";
import "../Bonus/Bonus.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../../Deskone/1images/login1.png";
import tik from "../../Deskone/1images/tik.png";
import Sidebar from "../../Sidebar/Sidebar";
export default function Bonus() {
  return (
    <div className="parentdiv">
      <section>
        <Container fluid>
          <Row className="sidebardiv">
            <Col lg={3} md={3} sm={12}>
              <Sidebar />
            </Col>
            <Col xl="9" lg="9" md="9" sm="9" xs="12">
              <Row>
                <Col lg="5" md="5" sm="6" className="bheaddiv">
                  <h1 className="bonushead"> Bonuses</h1>
                  <p className="bpara">From March 1 to 11, 2022</p>
                </Col>
                {/* <Col lg="6" md="7" sm="6"></Col> */}
              </Row>
              <div className="greenrow">
                <Row>
                  <Col lg="3">
                    <p className="greenpara">Puntuality</p>
                  </Col>
                  <Col lg="4"></Col>
                  <Col lg="3">
                    <p className="greendigit">$ 20.000</p>
                  </Col>
                  <Col lg="2" className="greentik">
                    <img src={tik} />
                  </Col>
                </Row>
              </div>
              <div className="greenrow">
                <Row>
                  <Col lg="3">
                    <p className="greenpara">Puntuality</p>
                  </Col>
                  <Col lg="4"></Col>
                  <Col lg="3">
                    <p className="greendigit">$ 20.000</p>
                  </Col>
                  <Col lg="2" className="greentik">
                    <img src={tik} />
                  </Col>
                </Row>
              </div>
              <div className="greenrow">
                <Row>
                  <Col lg="3">
                    <p className="greenpara">Puntuality</p>
                  </Col>
                  <Col lg="4"></Col>
                  <Col lg="3">
                    <p className="greendigit">$ 20.000</p>
                  </Col>
                  <Col lg="2" className="greentik">
                    <img src={tik} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

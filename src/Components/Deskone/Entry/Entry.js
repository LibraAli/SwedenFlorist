import React from "react";
import "../Entry/Entry.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../../Deskone/1images/login1.png";
import loc from "../../Deskone/1images/locc.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Entry() {
  return (
    <div className="parentdiv">
      <section>
        <Container fluid>
          <Row className="sidebardiv">
            <Col lg={3} md={3} sm={12}>
              <Sidebar />
            </Col>
            <Col xl="9" lg="9" md="9" sm="9" xs="12">
              <div className="maindiv">
                {/* data entry lunch departure */}
                <div className="rooo">
                  <div>
                    <div className="entrydiv">
                      <h5 className="entrypara">Entry</h5>
                    </div>
                  </div>
                  <div>
                    <div className="lunchdiv">
                      <h5 className="lunch">Lunch</h5>
                    </div>
                  </div>
                  <div>
                    <div className="depdiv">
                      <h5 className="deppara">Departure</h5>
                    </div>
                  </div>
                </div>
                <div className="forediv">
                  {/* 6 */}
                  <div className="divsix">
                    <Row>
                      <Col lg="1" md="1" sm="1">
                        <span className="sixfigr">1.</span>
                      </Col>
                      <Col lg="9" md="9" sm="9">
                        <p className="sixdate">10-03-2022</p>
                      </Col>
                      <Col lg="2" md="2" sm="2">
                        <a className="sixpara">Watch </a>
                      </Col>
                    </Row>
                  </div>
                  <div className="divsix">
                    <Row>
                      <Col lg="1" md="1" sm="1">
                        <span className="sixfigr">1.</span>
                      </Col>
                      <Col lg="9" md="9" sm="9">
                        <p className="sixdate">10-03-2022</p>
                      </Col>
                      <Col lg="2" md="2" sm="2">
                        <a className="sixpara">Watch </a>
                      </Col>
                    </Row>
                  </div>
                  <div className="divsix">
                    <Row>
                      <Col lg="1" md="1" sm="1">
                        <span className="sixfigr">1.</span>
                      </Col>
                      <Col lg="9" md="9" sm="9">
                        <p className="sixdate">10-03-2022</p>
                      </Col>
                      <Col lg="2" md="2" sm="2">
                        <a className="sixpara">Watch </a>
                      </Col>
                    </Row>
                  </div>
                  <div className="divsix">
                    <Row>
                      <Col lg="1" md="1" sm="1">
                        <span className="sixfigr">1.</span>
                      </Col>
                      <Col lg="9" md="9" sm="9">
                        <p className="sixdate">10-03-2022</p>
                      </Col>
                      <Col lg="2" md="2" sm="2">
                        <a className="sixpara">Watch </a>
                      </Col>
                    </Row>
                  </div>

                  <div className="locdiv">
                    <img className="locimg" src={loc} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

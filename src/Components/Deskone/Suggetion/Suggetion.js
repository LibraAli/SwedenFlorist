import React from "react";
import "../Suggetion/Suggetion.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../../Deskone/1images/login1.png";
import arrow from "../1images/arrow.png";
import icon1 from "../1images/icon1.png";
import finishbtn from "../1images/finish.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Suggetion() {
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
                {/* 4 */}
                <div className="forediv">
                  <h2 className="forehead">Suggestions</h2>
                  <div className="forebackbox"></div>
                  <Row>
                    <Col lg="12">
                      <p className="forepara">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras at lorem nibh. Sed quis interdum nisl. Morbi
                        consectetur ac diam ac auctor. Integer quis rutrum
                        magna. Fusce a lacus non libero ultricies maximus.
                        Vestibulum porta euismod aliquam. Morbi venenatis velit
                        urna, a facilisis lacus sodales nec. Aenean vehicula
                        neque quis consequat dictum.
                      </p>
                    </Col>
                  </Row>
                  {/* 5 */}
                  <Row>
                    <Col lg="6">
                      <div className="fivediv">
                        <h3 className="fivepara">Submitted Suggestion</h3>
                      </div>
                    </Col>
                  </Row>
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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

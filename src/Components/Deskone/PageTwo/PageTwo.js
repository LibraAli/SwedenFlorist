import React from "react";
import "../PageTwo/PageTwo.scss";
import { Container, Row, Col } from "react-bootstrap";
import main1 from "../../Deskone/1images/main.png";
import login1 from "../../Deskone/1images/login1.png";
import camera from "../1images/camera.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Deskone() {
  return (
    <div className="parentdiv">
      <section>
        <Container fluid>
          <Row className="sidebardiv">
            <Col className="sidebarmain" lg="3" md="3" sm="3" xs="12">
              <Sidebar />
            </Col>
            <Col lg="9" md="9" sm="9" xs="12">
              <div className="eghtdiv">
                <div className="mainimgdiv">
                  <img className="flowerimg" src={main1} />
                </div>
                {/* buttons */}
                <div className="btndiv">
                  <div className="btn1">
                    <h3 className="btnonehead">Comments</h3>
                  </div>
                  <div className="btn2">
                    <h3 className="btntwohead">Pause/Cancel</h3>
                    <img className="camera" src={camera} />
                  </div>
                  <div className="btn3">
                    <h3 className="btnthreehead">Finalize</h3>
                    <img className="camera" src={camera} />
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

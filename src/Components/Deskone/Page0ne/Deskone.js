import React from "react";
import "../Page0ne/Deskone.scss";
import { Container, Row, Col } from "react-bootstrap";
import main1 from "../../Deskone/1images/main.png";
import tuto from "../1images/tuto.png";
import start from "../1images/statr.png";
import login1 from "../../Deskone/1images/login1.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
export default function Deskone() {
  const navigate = useNavigate();
  return (
    <div className="parentdiv">
      <Container fluid>
        <Row>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className="mainwdth">
              <Sidebar />
            </div>
          </Col>
          <Col lg={9} md={9} sm={9} xs={12}>
            <div className="eghtdiv1">
              <div className="mainimgdiv1">
                <img className="flowerimg1" src={main1} />
              </div>
              {/* buttons */}
              <div className="btndiv1">
                <button className="totbtn1">
                  <img className="totimg1" src={tuto} />
                </button>
                <button className="startbtn1">
                  <img className="startimg1" src={start} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

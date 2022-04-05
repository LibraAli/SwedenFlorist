import React from "react";
import "../Elig/Elig.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../../Deskone/1images/login1.png";
import arrow from "../1images/arrow.png";
import finishbtn from "../1images/term.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Elig() {
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
                {/* 1 */}
                <div className="mainheaddiv">
                  <h1 className="mainheading">ELIGE LA FLOR</h1>
                </div>
                {/* 2 */}
                <div className="seconddiv">
                  <h1 className="secondhead">Roses</h1>
                  <img className="secondimg" src={arrow} />
                  <div className="secondfgr">
                    <h2>2</h2>
                  </div>
                </div>
                {/* 3 */}
                <div className="thirddiv">
                  <h1 className="thirdhead">Girasoles</h1>
                  <img className="thirdimg" src={arrow} />
                  <div className="thirdfgr">
                    <h2>3</h2>
                  </div>
                </div>
                {/* 4 */}
                <div className="thirddiv">
                  <h1 className="thirdhead">Add...</h1>
                  <img className="thirdimg" src={arrow}></img>
                  <div className="thirdfgr">
                    <h2>4</h2>
                  </div>
                  {/* <h2>2</h2> */}
                </div>
                {/* 5 */}
                <div className="forediv">
                  <h2 className="forehead">
                    Comment or suggestion about the product or order
                  </h2>
                  <div className="forebackbox"></div>
                  <div className="finishbtndiv">
                    <button className="finishbtn">
                      <img className="finishimg" src={finishbtn} />
                    </button>
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

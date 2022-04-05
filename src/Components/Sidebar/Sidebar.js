import React from "react";
import "../Sidebar/Sidebar.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../Deskone/1images/login1.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className="sidebarcont">
        <Row className="sidebardiv">
          <Col className="sidebarmain">
            <Row>
              {/* 1 */}
              <Col lg="12">
                <div className="nmbr11">
                  <h2 className="nmbronehead1">Sweden Florist</h2>
                  <div className="nmbrone1">
                    <img className="nmbroneimg1" src={login1} />
                    <h6 className="nmbroneheadpamela1">Pamela Castillo</h6>
                  </div>
                </div>
              </Col>
              {/* 2 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div
                  className="nmbr21"
                  style={{
                    backgroundColor:
                      "/123" === location.pathname
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <h2
                    onClick={() => navigate("/123")}
                    style={{ cursor: "pointer" }}
                    className="nmbrtwohead1"
                  >
                    Requests
                  </h2>
                </div>
              </Col>
              {/* 3 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div
                  className="nmbr3"
                  style={{
                    backgroundColor:
                      "/sunf" === location.pathname
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <p
                    className="nmbrthreeparad"
                    onClick={() => navigate("/sunf")}
                    style={{ cursor: "pointer" }}
                  >
                    Inventory / Drop flowers
                  </p>
                </div>
              </Col>
              {/* 4 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div
                  className="nmbr41"
                  onClick={() => navigate("/suggs")}
                  style={{
                    backgroundColor:
                      "/suggs" === location.pathname
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.12)",
                  }}
                  // className="nmbrtwohead1"
                >
                  <p
                    className="nmbrfourpara1"
                    onClick={() => navigate("/456")}
                    style={{ cursor: "pointer" }}
                  >
                    Suggestions
                  </p>
                </div>
              </Col>
              {/* 5 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div className="nmbr5">
                  <p
                    className="nmbrfivepara1"
                    onClick={() => navigate("/product")}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        "/product" === location.pathname
                          ? "rgba(0, 0, 0, 0.23)"
                          : "rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    Attendance/Signature
                  </p>
                </div>
              </Col>
              {/* 6 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div className="nmbr6">
                  <p
                    className="mnbrsixpara1"
                    onClick={() => navigate("/entry")}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        "/entry" === location.pathname
                          ? "rgba(0, 0, 0, 0.23)"
                          : "rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    Bonuses
                  </p>
                </div>
              </Col>
              {/* 7 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div
                  className="nmbr7"
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      "/bonus" === location.pathname
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <p
                    className="nmbrsevenpara1"
                    onClick={() => navigate("/bonus")}
                    style={{ cursor: "pointer" }}
                  >
                    Regulation
                  </p>
                </div>
              </Col>
              {/* 8 */}
              <Col lg="12" style={{ padding: "0px" }}>
                <div className="nmbr8">
                  <h2
                    className="mnbreightheading1"
                    onClick={() => navigate("/policies")}
                    style={{ cursor: "pointer" }}
                  >
                    Pamela Castillo
                  </h2>
                  <p
                    className="eightpara1"
                    onClick={() => navigate("/Product")}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        "/Product" === location.pathname
                          ? "rgba(0, 0, 0, 0.23)"
                          : "rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    Settings
                  </p>
                </div>
              </Col>
              {/* end */}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

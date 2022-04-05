import React from "react";
import "../Sunflower/Sunflower.scss";
import { Container, Row, Col } from "react-bootstrap";
import vases from "../1images/vases.png";
import gajj from "../1images/gajj.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Deskone() {
  const deskdata = [
    {
      imgvas: vases,
      gaj: "",
      list: ["Sunflowers and Roses", ""],
      subhead: "#6621",
      price: "Price",
      coed: "$00.00",
      qty: "Qty",
      subb: "Subtotal",
      amount: "$00.00",
      btn: "confirm",
      article: "",
      showList: false,
    },
    {
      imgvas: vases,
      gaj: gajj,
      list: ["Corona Grande de FloresRoses", "Girasoles y Rosas"],
      subhead: "#6621",
      price: "Price",
      article: "2 artículos",
      coed: "$00.00",
      qty: "Qty",
      subb: "Subtotal",
      amount: "$00.00",
      btn: "confirm",
      showList: true,
    },
    {
      imgvas: vases,
      gaj: "",
      list: ["Sunflowers and Roses", ""],
      subhead: "#6621",
      price: "Price",
      coed: "$00.00",
      qty: "Qty",
      subb: "Subtotal",
      amount: "$00.00",
      btn: "confirm",
      article: "",
      showList: false,
    },
  ];
  return (
    <div className="parentdiv">
      <section>
        <Container fluid>
          <Row className="sidebardiv">
            <Col lg={3} md={3} sm={12}>
              <Sidebar />
            </Col>
            <Col lg="9" md="9" sm="9" xs="12">
              {deskdata.map((doll, index) => (
                <div className="sunseconddiv">
                  {/* row 1 */}
                  <Row>
                    <Col
                      lg="2"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="imgdiv">
                        <img className="vases" src={doll.imgvas} />
                        {doll.gaj === "" ? (
                          ""
                        ) : (
                          <img className="vases" src={doll.gaj} />
                        )}
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="sundiv">
                        {doll.list.map((heading, headIndex) => {
                          return (
                            <li
                              style={{
                                listStyleType: `${doll.showList ? "" : "none"}`,
                              }}
                              className="sunhead"
                            >
                              {heading}
                            </li>
                          );
                        })}

                        {/* {doll.heading2 ? (
                          <li
                            style={{ border: "1px solid black" }}
                            className="sunhead"
                          >
                            {doll.heading2}
                          </li>
                        ) : (
                          ""
                        )} */}
                        <div>
                          <p className="sunpara">{doll.subhead}</p>

                          {doll.article ? (
                            <p className="sunpara">{doll.article}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg="2"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="pricediv">
                        <h4 className="pricehead">{doll.price}</h4>
                        <p className="poricecode">{doll.coed}</p>
                      </div>
                    </Col>
                    <Col
                      lg="1"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="qtydiv">
                        <p className="qtypara">{doll.qty}</p>
                      </div>
                    </Col>
                    <Col
                      lg="2"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="subdiv">
                        <h4 className="subheading">{doll.subb}</h4>
                        <p className="subpara">{doll.amount}</p>
                      </div>
                    </Col>
                    <Col
                      lg="2"
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="btndiv">
                        <button className="confirmbtn">{doll.btn}</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

import React from "react";
import "../Policies/Policies.scss";
import { Container, Row, Col } from "react-bootstrap";
import login1 from "../../Deskone/1images/login1.png";
import Sidebar from "../../Sidebar/Sidebar";

export default function Policies() {
  return (
    <div className="parentdiv">
      <section>
        <Container fluid>
          <Row className="sidebardiv">
            <Col lg={3} md={3} sm={12}>
              <Sidebar />
            </Col>
            <Col lg={9} md={9} sm={9} xs={12} className="operation">
              <Row>
                <Col lg="5" md="7" sm="9" xs="12" className="polidiv">
                  <h1 className="poliheadi"> Operations Area Policies</h1>
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12" className="poliparadiv">
                  <div>
                    <ul>
                      <li className="polipara">Inventory </li>
                      <li className="polipara">
                        Red roses: they are left in zone a1. At the moment of
                        receiving the flowers, the thorns and leaves must be
                        cut, in addition to putting them in water.{" "}
                      </li>
                      <li className="polipara">
                        White roses are left in zone a2. At the moment of
                        receiving the flowers, the thorns and leaves must be
                        cut, in addition to putting them in water.
                      </li>
                      <li className="polipara">
                        Sunflowers are left in zone a3 Upon receipt, the stems
                        must be cut and put into the water in available buckets
                      </li>
                      <li className="polipara">
                        New merchandise: when each new merchandise arrives, the
                        buckets must be reordered with their respective numbers
                        following the FIFO method. In addition, the new
                        merchandise must be added to the inventory system. The
                        FIFO method consists of using first what came first
                        (First In, First Out). The first thing to come is the
                        first thing to go.
                      </li>
                      <li className="polipara">
                        For example, roses arrive and 2 buckets are filled,
                        number 1 and number 2, when new merchandise arrives
                        (assuming that there is nothing left in bucket 1, the
                        merchandise from bucket 2 must be put in bucket 1 and
                        the new merchandise in bucket 2
                      </li>
                      <li className="polipara">
                        Frequency: the inventory will be carried out once a week
                        to rectify the merchandise and see what happened to what
                        does not fit Throw flowers: must be done with prior
                        authorization
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

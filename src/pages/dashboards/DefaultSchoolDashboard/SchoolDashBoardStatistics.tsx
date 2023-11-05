import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Col, Card, Row } from "react-bootstrap";
import { faBook, faChalkboardUser, faUserGraduate, faCancel, faList, faQuestion, faQuestionCircle, faSave, faDirections, faFolder } from '@fortawesome/free-solid-svg-icons'
import { UserCheck, DollarSign, ShoppingBag } from "react-feather";

import illustration from "../../../assets/img/illustrations/customer-support.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SchoolDashBoardStatistics = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Row>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-5">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2" style={{ fontSize: "4em", color: "#4BBF73" }}>324</h3>
                  <p className="mb-2 fs-4">Students</p>
                </div>
                <FontAwesomeIcon icon={faUserGraduate} style={{ fontSize: "8em", color: "#84aef2" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-5">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2" style={{ fontSize: "4em", color: "#4BBF73" }}>85</h3>
                  <p className="mb-2 fs-4">Teachers</p>
                </div>
                <FontAwesomeIcon icon={faChalkboardUser} style={{ fontSize: "8em", color: "#84aef2" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-5">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2" style={{ fontSize: "4em", color: "#4BBF73" }}>536</h3>
                  <p className="mb-2 fs-4">Subjects</p>
                </div>
                <FontAwesomeIcon icon={faBook} style={{ fontSize: "8em", color: "#84aef2" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2">56</h3>
                  <p className="mb-2">Number of Students</p>
                </div>
                <div className="d-inline-block ms-3">
                  <div className="stat">
                    <FontAwesomeIcon icon={faUserGraduate} className="align-middle text-success" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2">45</h3>
                  <p className="mb-2">Number of Teachers</p>
                </div>
                <div className="d-inline-block ms-3">
                  <div className="stat">
                    <FontAwesomeIcon icon={faChalkboardUser} className="align-middle text-success" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="flex-fill">
            <Card.Body className=" py-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h3 className="mb-2">34</h3>
                  <p className="mb-2">Number of Subjects</p>
                </div>
                <div className="d-inline-block ms-3">
                  <div className="stat">
                    <FontAwesomeIcon icon={faBook} className="align-middle text-success" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SchoolDashBoardStatistics;

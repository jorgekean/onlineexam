import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Col, Card, Row } from "react-bootstrap";

import { DollarSign, ShoppingBag } from "react-feather";

import illustration from "../../../assets/img/illustrations/customer-support.png";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <>
      <Col xl className="">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">324</h3>
                <p className="mb-2">Number of students registered</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +5.35%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">85</h3>
                <p className="mb-2">Exams Created</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-danger me-2">
                    -4.25%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <ShoppingBag className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">536</h3>
                <p className="mb-2">Questions in bank</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +8.65%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

      </Col>

    </>
  );
};

export default Statistics;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Activity from "./Activity";
import BarChart from "./BarChart";
import Header from "./Header";
import Products from "./Products";
import Statistics from "./Statistics";

const SaaS = () => (
  <React.Fragment>
    <Helmet title="SaaS Dashboard" />
    <Container fluid className="p-0">
      <Header />
      <Statistics />
      <Row>
        <Col md="7" lg="4" className="col-xxl-6 d-flex">
          <BarChart />
        </Col>
        <Col md="5" lg="4" className="col-xxl-2 d-flex">
          <Activity />
        </Col>
      </Row>
      <Products />
    </Container>
  </React.Fragment>
);

export default SaaS;

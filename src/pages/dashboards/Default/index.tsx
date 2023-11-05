import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header";
import Appointments from "./Appointments";
import BarChart from "./BarChart";
import Calendar from "./Calendar";
import Feed from "./Feed";
import PieChart from "./PieChart";
import Projects from "./Projects";
import Statistics from "./Statistics";
import TeacherAppointments from "../../../components/TeacherAppointments";
import TeacherLatestExam from "../../../components/TeacherLatestExam"
const Default = () => (
  <React.Fragment>
    <Helmet title="Dashboard" />
    <Container fluid className="p-0">
      <Header />
      <Row>
        <Col lg="8" className="d-flex">
          <BarChart />
        </Col>
        <Col lg="4" className="d-flex">
          {/* <SchoolDashboardPieChart /> */}
          <Calendar />

        </Col>
      </Row>
      <Row>
        <Col lg="4" className="d-flex">
          <TeacherAppointments />
        </Col>
        <Col lg="8" className="d-flex">
          <TeacherLatestExam />
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="d-flex">
          <Projects />
        </Col>
        <Col lg="4" xl="4" className="d-flex">
          <Appointments />
        </Col>
      </Row>
      {/* <Projects /> */}
    </Container>
  </React.Fragment>
);

export default Default;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

// import Header from "./Header";
import Header from "../Default/Header";
import Appointments from "../Default/Appointments";
import BarChart from "../Default/BarChart";
import Calendar from "../Default/Calendar";
import Feed from "../Default/Feed";
import PieChart from "../Default/PieChart";
import Projects from "../Default/Projects";
import Statistics from "../Default/Statistics";
import RadarChart from "../Analytics/RadarChart";
import StudentDashboardPieChart from "./StudentDashBoardPieChart";
import StudentDashBoardBarChart from "./StudentDashBoardBarChart";
import StudentDashBoardAppointments from "./StudentDashBoardAppointments";
import StudentDashBoardLatestExam from "./StudentDashBoardLatestExam";

const DefaultStudentDashboard = () => (
    <React.Fragment>
        <Helmet title="Dashboard" />
        <Container fluid className="p-0">
            <Header />
            <Row>
                <Col lg="8" className="d-flex">
                    {/* <StudentDashBoardBarChart /> */}
                    <StudentDashboardPieChart />
                </Col>
                <Col lg="4" className="d-flex">
                    {/* <StudentDashboardPieChart /> */}
                    <Calendar />

                </Col>
            </Row>
            <Row>
                <Col lg="6" xl="4" className="d-flex">
                    <StudentDashBoardAppointments />
                </Col>
                <Col className="d-flex">
                    <StudentDashBoardLatestExam />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default DefaultStudentDashboard;

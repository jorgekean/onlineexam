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

import SchoolDashBoardStatistics from "./SchoolDashBoardStatistics";
import SchoolAppointments from "../../../components/SchoolAppointments";
import SchoolLatestExam from "../../../components/SchoolLatestExam";
// import StudentDashboardPieChart from "./SchoolDashBoardPieChart";
// import StudentDashBoardBarChart from "./SchoolDashBoardBarChart";
// import StudentDashBoardAppointments from "./SchoolDashBoardAppointments";
// import StudentDashBoardLatestExam from "./SchoolDashBoardLatestExam";

import SchoolDashboardPieChart from "./SchoolDashBoardPieChart";
import SchoolDashBoardBarChart from "./SchoolDashBoardBarChart";
import SchoolDashBoardAppointments from "./SchoolDashBoardAppointments";
import SchoolDashBoardLatestExam from "./SchoolDashBoardLatestExam";

const DefaultSchoolDashboard = () => (
    <React.Fragment>
        <Helmet title="Dashboard" />
        <Container fluid className="p-0">
            <Header />
            <SchoolDashBoardStatistics />
            <Row>
                <Col lg="8" className="d-flex">
                    <SchoolDashBoardBarChart />
                </Col>
                <Col lg="4" className="d-flex">
                    {/* <SchoolDashboardPieChart /> */}
                    <Calendar />

                </Col>
            </Row>
            <Row>
                <Col lg="4" className="d-flex">
                    <SchoolAppointments />
                </Col>
                <Col lg="8" className="d-flex">
                    {/* <SchoolDashboardPieChart /> */}
                    <SchoolLatestExam />

                </Col>
            </Row>
            {/* <Row>
                <Col lg="6" xl="4" className="d-flex">
                    <SchoolDashBoardAppointments />
                </Col>
                <Col className="d-flex">
                    <SchoolDashBoardLatestExam />
                </Col>
            </Row> */}
        </Container>
    </React.Fragment>
);

export default DefaultSchoolDashboard;

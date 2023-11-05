import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

// import Header from "./Header";
import Header from "../../dashboards/Default/Header";
import Appointments from "../../dashboards/Default/Appointments";
import BarChart from "../../dashboards/Default/BarChart";
import Calendar from "../../dashboards/Default/Calendar";
import Feed from "../../dashboards/Default/Feed";
import PieChart from "../../dashboards/Default/PieChart";
import Projects from "../../dashboards/Default/Projects";
import Statistics from "../../dashboards/Default/Statistics";
import RadarChart from "../../dashboards/Analytics/RadarChart";
// import StudentDashboardPieChart from "./StudentDashBoardPieChart";
import StudentDashboardPieChart from "../../dashboards/DefaultStudentDashboard/StudentDashBoardPieChart";
import StudentDashBoardBarChart from "../../dashboards/DefaultStudentDashboard/StudentDashBoardBarChart";
import StudentDashBoardAppointments from "../../dashboards/DefaultStudentDashboard/StudentDashBoardAppointments";
import StudentDashBoardLatestExam from "../../dashboards/DefaultStudentDashboard/StudentDashBoardLatestExam";

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

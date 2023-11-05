import React from "react";
import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import ExamHistory from "../../../components/_studentscomponents/examhistory/ExamHistory";

interface DashboardPageProps {
    children?: ReactNode;
}

const ExamHistoryPage: React.FC<DashboardPageProps> = ({ children }) => {

    return (
        <React.Fragment>
            <Helmet title="Exam History" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col>
                        <ExamHistory />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ExamHistoryPage
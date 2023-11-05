import React, { useState } from "react";
import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { ExamModel } from "../../../components/exams/ExamsForm";
import ExamMonitoring from "../../../components/_studentscomponents/examMonitoring/ExamMonitoring";
import SummaryChart from "../../../components/_studentscomponents/examMonitoring/Summary";
interface DashboardPageProps {
    children?: ReactNode;
}

const ExamMonitoringPage: React.FC<DashboardPageProps> = ({ children }) => {
    const [exam, setExam] = useState<ExamModel | undefined>(undefined)

    const setSelectedExam = (model: ExamModel | undefined) => {
        setExam(model);
    };


    return (
        <React.Fragment>
            <Helmet title="Exam" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col lg='8'>
                        <ExamMonitoring />
                    </Col>
                    <Col>
                    <SummaryChart />

                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default ExamMonitoringPage
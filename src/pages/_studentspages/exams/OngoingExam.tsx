import React, { useState } from "react";
import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import OngoingExam from "../../../components/_studentscomponents/ongoing-exam/ongoing-exam";


interface OngoingExamPageProps {
    children?: ReactNode;
}

const OngoingExamPage: React.FC<OngoingExamPageProps> = ({ children }) => {




    return (
        <React.Fragment>
            <Helmet title="Exam" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col>
                     <OngoingExam/>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default OngoingExamPage
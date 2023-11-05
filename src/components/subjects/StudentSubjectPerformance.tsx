import React, { ReactNode, useState } from 'react'
import { Container, Row, Col, Card, Tabs, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PerformanceSummary from './PerformanceSummary';
import SubjectExamHistory from './ExamHistory';

import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../config';
import { useParams } from 'react-router-dom';
interface StudentSubjectPerformanceProps {
    children?: ReactNode;
}

const StudentSubjectPerformancePage: React.FC<StudentSubjectPerformanceProps> = ({ children }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log('subjectperf',id)
    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className="mt-0">Student Subject Performance</h4>
                    <div className='d-flex gap-1 mt-0 pt-0'>
                        <Button onClick={() => { navigate(`${myAppConfig.baseURL}/subjects`) }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
                <Card.Body>
                    <Tabs
                        defaultActiveKey="Performancesummary"
                        id="uncontrolled-tab-example"
                        className="mb-3 mt-0"
                    >
                        <Tab eventKey="Performancesummary" title="Performance Summary">
                            <PerformanceSummary studentID={id} />
                        </Tab>

                        <Tab eventKey="Exam History" title="Exam History">
                            <SubjectExamHistory />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card.Header>
        </Card>
    )
}

export default StudentSubjectPerformancePage
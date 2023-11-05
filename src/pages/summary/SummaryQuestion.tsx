import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Students from '../../components/students/Students';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import StudentsForm, { StudentModel } from '../../components/students/StudentsForm';
import StudentsProfile from '../../components/students/StudentsProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import StudentHistoryPerformance from '../../components/students/StudentHistoryPerformance';
import SummaryQuestion from '../../components/summary/SummaryQuestion';


import StudentSideProfile from '../../components/students/StudentSideProfile';
const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.',
    'Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.',
    'Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.'
];
const asd = [
    'asd'
];

interface StudentProps {
    children?: ReactNode;
}

const SummaryQuetionPage: React.FC<StudentProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [viewMode, setViewMode] = useState<boolean>(true);
    const [profile, setProfile] = useState<boolean>(true);
    const [studentPerformanceHistory, setstudentPerformanceHistory] = useState<boolean>(true);
    const [student, setStudent] = useState<StudentModel | undefined>(undefined)

    const [viewProfile, setViewProfile] = useState<boolean>(true);


    // Function to update the listMode state from the Students and StudentsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedRow = (model: StudentModel | undefined) => {
        setStudent(model);
    };

    const updateview = (mode: boolean) => {
        setViewMode(mode);
    };

    const onViewProfile = (mode: boolean) => {
        setViewProfile(mode);
    };

    const onStudentHistoryPerformance = (mode: boolean) => {
        setstudentPerformanceHistory(mode);
    };

    return (
        <React.Fragment>
            <Helmet title="Student" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col>
                        <SummaryQuestion />
                    </Col>
                    {/* <Col lg="4">
                        {viewProfile ? <DidYouKnow items={wikiItems} onViewProfile={onViewProfile} /> : <StudentSideProfile onViewProfile={onViewProfile} student={student} />}
                        {viewProfile ? <RelatedTasks /> : null}
                    </Col> */}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default SummaryQuetionPage
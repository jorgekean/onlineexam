import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Students from '../../components/students/Students';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import StudentsForm, { StudentModel } from '../../components/students/StudentsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.',
    'Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.',
    'Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.'
];

interface StudentProps {
    children?: ReactNode;
}

const StudentsPage: React.FC<StudentProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [student, setStudent] = useState<StudentModel | undefined>(undefined)

    // Function to update the listMode state from the Students and StudentsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedStudent = (model: StudentModel | undefined) => {
        setStudent(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Student" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Students updateListMode={updateListMode} setSelectedRow={setSelectedStudent} /> : <StudentsForm updateListMode={updateListMode} student={student} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} />
                        <RelatedTasks>
                        </RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default StudentsPage
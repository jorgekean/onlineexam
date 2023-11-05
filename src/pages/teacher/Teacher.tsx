import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Subjects from '../../components/subjects/Subjects';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import SubjectForm, { SubjecModel } from '../../components/subjects/SubjectForm';
import TeacherForm, { TeacherModel } from '../../components/teacher/TeacherForm';
import Teacher from '../../components/teacher/Teacher';
import TeacherPerformance from '../../components/teacher/TeacherPerformance';
import TeacherSideProfile from '../../components/teacher/TeacherSideProfile';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface TeacherProps {
    children?: ReactNode;
}

const TeachersPage: React.FC<TeacherProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [view, setView] = useState<boolean>(true);
    const [teacher, setTeacher] = useState<TeacherModel | undefined>(undefined)

    // Function to update the listMode state from the Teacher and TeacherCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedRow = (model: TeacherModel | undefined) => {
        setTeacher(model);
    };

    const updateView = (mode: boolean) => {
        setView(mode)
    }

    return (
        <React.Fragment>
            <Helmet title="Teachers" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row className={!view ? 'flex-lg-row-reverse' : ''}>
                    <Col lg="8">
                        {listMode ?
                            (view ?
                                <Teacher updateListMode={updateListMode} setSelectedRow={setSelectedRow} updateView={updateView} />
                                : <TeacherPerformance updateListMode={updateListMode} updateview={updateView} setSelectedRow={setSelectedRow} teacher={teacher} />)
                            : <TeacherForm updateListMode={updateListMode} teacher={teacher} />}
                    </Col>
                    <Col lg="4">
                        {view ? <DidYouKnow items={wikiItems} /> : <TeacherSideProfile onViewProfile={updateView} teacher={teacher} />}
                        {view ? <RelatedTasks /> : null}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default TeachersPage
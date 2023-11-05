import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Subjects from '../../components/subjects/Subjects';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import SubjectForm, { SubjecModel } from '../../components/subjects/SubjectForm';
import SubjectMembers from '../../components/subjects/SubjectMembers';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface SubjectProps {
    children?: ReactNode;
}

const SubjectsPage: React.FC<SubjectProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [viewMode, setVeiwMode] = useState<boolean>(true);
    const [subject, setSubject] = useState<SubjecModel | undefined>(undefined)

    // Function to update the listMode state from the Subjects and SubjectsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const updateViewMode = (mode: boolean) => {
        setVeiwMode(mode);
    };

    const setSelectedSubject = (model: SubjecModel | undefined) => {
        setSubject(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Subjects" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? (
                            viewMode ? (
                                <Subjects
                                    updateListMode={updateListMode}
                                    setSelectedRow={setSelectedSubject}
                                    updateViewMode={updateViewMode}
                                />
                            ) : (

                                <SubjectMembers
                                    updateViewMode={updateViewMode}
                                    subject={subject}
                                />
                            )
                        ) : (
                            < SubjectForm
                                updateListMode={updateListMode}
                                subject={subject} />
                        )}
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

export default SubjectsPage
import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Exams from '../../components/exams/Exams';
import ExamsForm, { ExamModel } from '../../components/exams/ExamsForm';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import PickQuestionModal from '../../components/exams/PickQuestionModal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const wikiItems = [
    'Monitor the progress of ongoing exams.',
    'Edit an upcoming exam before it starts.',
    'Analyze the results of completed exams and view the scores of individual students.',
];

interface ExamProps {
    children?: ReactNode;
}

const ExamsPage: React.FC<ExamProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [exam, setExam] = useState<ExamModel | undefined>(undefined)

    // Function to update the listMode state from the Exams and ExamsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedExam = (model: ExamModel | undefined) => {
        setExam(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Exams" />
            <Container fluid className="p-0">
                {/* <hw1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Exams updateListMode={updateListMode} setSelectedRow={setSelectedExam} /> : <ExamsForm updateListMode={updateListMode} exam={exam} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow
                            items={wikiItems} onViewProfile={function (mode: boolean): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                        <RelatedTasks>
                        </RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ExamsPage
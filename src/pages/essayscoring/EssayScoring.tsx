import React, { ReactNode, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';

import Exams from '../../components/exams/Exams';
import { ExamModel } from '../../components/exams/ExamsForm';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import { QuestionModel } from '../../components/questions/QuestionsForm';
import EssayScoring from '../../components/essayscoring/EssayScoring';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface EssayScoringProps {
    children?: ReactNode;
}

const EssayScoringPage: React.FC<EssayScoringProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [essays, setEssays] = useState<QuestionModel | undefined>(undefined)

    // // Function to update the listMode state from the Exams and ExamsCreate components
    // const updateListMode = (mode: boolean) => {
    //     setListMode(mode);
    // };

    // const setSelectedExam = (model: ExamModel | undefined) => {
    //     setExam(model);
    // };

    return (
        <React.Fragment>
            <Helmet title="Essay Scoring" />
            <Container fluid className="p-0">
                <Row>
                    <Col lg="8">
                        <EssayScoring setSelectedRow={function (model: ExamModel | undefined): void {
                            throw new Error('Function not implemented.');
                        }} />
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

export default EssayScoringPage
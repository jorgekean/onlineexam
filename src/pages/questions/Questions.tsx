import React, { ReactNode, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import Questions from '../../components/questions/Questions';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import QuestionsForm, { QuestionModel } from '../../components/questions/QuestionsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.'
];

interface QuestionProps {
    children?: ReactNode;
}

const QuestionsPage: React.FC<QuestionProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionModel | undefined>(undefined)

    // Function to update the listMode state from the Questions and QuestionsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedQuestion = (model: QuestionModel | undefined) => {
        setQuestion(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Question" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Questions updateListMode={updateListMode} setSelectedRow={setSelectedQuestion} /> : <QuestionsForm updateListMode={updateListMode} question={question} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} />
                        <RelatedTasks>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowUp} style={{ marginRight: '8px' }} />{' '}
                                <Link to={''} className=''>Import Questions</Link>
                            </div>
                            <div className="border-bottom py-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowDown} style={{ marginRight: '8px' }} />{' '}
                                <Link to={''}>Export your data</Link>
                            </div>
                        </RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default QuestionsPage
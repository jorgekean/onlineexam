import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Candidates from '../../components/candidates/Candidates';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import CandidatesCreate, { CandidateModel } from '../../components/candidates/CandidatesCreate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
    'Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.',
    'Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.',
    'Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.'
];

interface CandidateProps {
    children?: ReactNode;
}

const CandidatesPage: React.FC<CandidateProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [candidate, setCandidate] = useState<CandidateModel | undefined>(undefined)

    // Function to update the listMode state from the Candidates and CandidatesCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedCandidate = (model: CandidateModel | undefined) => {
        setCandidate(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Candidate" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Candidates updateListMode={updateListMode} setSelectedRow={setSelectedCandidate} /> : <CandidatesCreate updateListMode={updateListMode} candidate={candidate} />}
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

export default CandidatesPage
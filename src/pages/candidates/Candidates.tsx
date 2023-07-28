import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom'
import Candidates from '../../components/candidates/Candidates';
import DidYouKnow from '../../components/candidates/DidYouKnow';
import RelatedTasks from '../../components/candidates/RelatedTasks';
import CandidatesCreate from '../../components/candidates/CandidatesCreate';

interface CandidateProps {
    children?: ReactNode;
}

const CandidatesPage: React.FC<CandidateProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);

    // Function to update the listMode state from the Candidates and CandidatesCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    return (
        <React.Fragment>
            <Helmet title="Candidate" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Candidates updateListMode={updateListMode} /> : <CandidatesCreate updateListMode={updateListMode} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow />
                        <RelatedTasks />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CandidatesPage
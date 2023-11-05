
import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'

import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';

import Directions from '../../components/directions/Directions';
import DirectionsForm, { DirectionModel } from '../../components/directions/DirectionsForm';

const wikiItems = [
    'Directions provide longer detailed instructions on how to respond to a few related questions.',
    'An example of this is reading comprehension. The student is instructed to read a paragraph, then a few questions are asked related to the paragraph.',
];

interface DirectionProps {
    children?: ReactNode;
}

const Direction: React.FC<DirectionProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [directions, setDirections] = useState<DirectionModel | undefined>(undefined)

    // Function to update the listMode state from the Subjects and SubjectsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };
    const setSelectedRow = (model: DirectionModel | undefined) => {
        setDirections(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Subjects" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Directions updateListMode={updateListMode} setSelectedRow={setSelectedRow} /> : <DirectionsForm updateListMode={updateListMode} directions={directions} />}
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

export default Direction
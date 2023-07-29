import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Sections from '../../../components/sections/Sections';
import DidYouKnow from '../../../components/wiki/DidYouKnow';
import RelatedTasks from '../../../components/relatedtask/RelatedTasks';
import SectionsCreate from '../../../components/sections/SectionsCreate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface SectionProps {
    children?: ReactNode;
}

const SectionsPage: React.FC<SectionProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);

    // Function to update the listMode state from the Sections and SectionsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    return (
        <React.Fragment>
            <Helmet title="Sections" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Sections updateListMode={updateListMode} /> : <SectionsCreate updateListMode={updateListMode} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} />
                        <RelatedTasks>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowUp} className='me-3' />{' '}
                                <Link to={''} className=''>Import Candidates</Link>
                            </div>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowDown} className='me-3' />{' '}
                                <Link to={''} className=''>Export your data</Link>
                            </div>
                            <div className="border-bottom py-2">
                                <FontAwesomeIcon size='2x' icon={faComments} className='me-3' />{' '}
                                <Link to={''}>Feedback</Link>
                            </div>
                        </RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default SectionsPage
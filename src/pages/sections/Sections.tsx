import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Sections from '../../components/sections/Sections';
import DidYouKnow from '../../components/wiki/DidYouKnow';
import RelatedTasks from '../../components/relatedtask/RelatedTasks';
import SectionsForm, { SectionModel } from '../../components/sections/SectionsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCloudArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';

const wikiItems = [
    'Lesson Sections in an exam are like chapters, grouping together questions that share a common topic, difficulty level, or question type.',
    'When you create a question, you can assign it to a section in this list.',
];

interface SectionProps {
    children?: ReactNode;
}

const SectionsPage: React.FC<SectionProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [section, setSection] = useState<SectionModel | undefined>(undefined)

    // Function to update the listMode state from the Sections and SectionsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedRow = (model: SectionModel | undefined) => {
        setSection(model);
    };

    return (
        <React.Fragment>
            <Helmet title="Sections" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Sections updateListMode={updateListMode} setSelectedRow={setSelectedRow} /> : <SectionsForm updateListMode={updateListMode} section={section} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} />
                        <RelatedTasks>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowUp} className='me-3' />{' '}
                                <Link to={''} className=''>Import questions</Link>
                            </div>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowDown} className='me-3' />{' '}
                                <Link to={''} className=''>Export questions</Link>
                            </div>
                        </RelatedTasks>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default SectionsPage
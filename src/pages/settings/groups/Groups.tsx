import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import Groups from '../../../components/groups/Groups';
import DidYouKnow from '../../../components/wiki/DidYouKnow';
import RelatedTasks from '../../../components/relatedtask/RelatedTasks';
import GroupsForm from '../../../components/groups/GroupsForm';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface GroupProps {
    children?: ReactNode;
}

const GroupsPage: React.FC<GroupProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);

    // Function to update the listMode state from the Groups and GroupsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    return (
        <React.Fragment>
            <Helmet title="Groups" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <Groups updateListMode={updateListMode} /> : <GroupsForm updateListMode={updateListMode} />}
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

export default GroupsPage
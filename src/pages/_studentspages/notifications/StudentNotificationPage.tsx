import React, { ReactNode, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
// import Notifications from '../../../components/notifications/Notifications';
import StudentNotifications from '../../../components/students/studentNotification/StudentNotifications';
import DidYouKnow from '../../../components/wiki/DidYouKnow';
import RelatedTasks from '../../../components/relatedtask/RelatedTasks';
// import NotificationForm, { NotificationModel } from '../../../components/notifications/NotificationsForm';
import StudentNotificationForm, { NotificationModel } from '../../../components/students/studentNotification/StudentNotificationsForm';

const wikiItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.',
];

interface NotificationProps {
    children?: ReactNode;
}

const StudentNotificationPage: React.FC<NotificationProps> = ({ children }) => {
    const [listMode, setListMode] = useState<boolean>(true);
    const [notification, setNotification] = useState<NotificationModel | undefined>(undefined)



    // Function to update the listMode state from the Subjects and SubjectsCreate components
    const updateListMode = (mode: boolean) => {
        setListMode(mode);
    };

    const setSelectedRow = (model: NotificationModel | undefined) => {
        setNotification(model);
    };


    return (
        <React.Fragment>
            <Helmet title="Notifications" />
            <Container fluid className="p-0">
                {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

                <Row>
                    <Col lg="8">
                        {listMode ? <StudentNotifications updateListMode={updateListMode} setSelectedRow={setSelectedRow} /> : <StudentNotificationForm updateListMode={updateListMode} notification={notification} />}
                    </Col>
                    <Col lg="4">
                        <DidYouKnow items={wikiItems} onViewProfile={function (mode: boolean): void {
                            throw new Error('Function not implemented.');
                        }} />
                        {/* <RelatedTasks>
                        </RelatedTasks> */}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default StudentNotificationPage
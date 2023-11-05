import { faCaretRight, faEdit, faGreaterThan, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGear, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Form, Row, Container, Image } from 'react-bootstrap'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import { useNavigate } from 'react-router-dom'
import { myAppConfig } from '../../../config'
import useAuth from '../../../hooks/useAuth'

// Define the type for the items
type Item = string;

// Define the props interface for the component
interface TeacherProps {
    // items: Item[];
    updateListMode: (mode: boolean) => void;
    student?: TeacherModel;
}

export interface TeacherModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    studentSubject: string;
    mobile: string;
    uniqueIdentification: string;
    uniqueIdentificationNumber: string;
    referenceId?: string;
    specialNeeds: string;
    moreDetails?: string;
    active: string;
    sendCredentials: boolean;
    displayName: string;
    ExamCount: string;
    AverageScores: string;
    LastExam: string;
    TimeTaken: string,
}

const StudentMyAccountSideProfile: React.FC<TeacherProps> = ({ updateListMode, student }) => {
    const initialFormState: TeacherModel = {
        id: student ? student.id : '',
        displayName: student ? student.displayName : '',
        firstName: student ? student.firstName : '',
        lastName: student ? student.lastName : '',
        email: student ? student.email : '',
        userName: student ? student.userName : '',
        password: student ? student.password : '',
        studentSubject: student ? student.studentSubject : '',
        mobile: student ? student.mobile : '',
        uniqueIdentification: student ? student.uniqueIdentification : '',
        uniqueIdentificationNumber: student ? student.uniqueIdentificationNumber : '',
        specialNeeds: student ? student.specialNeeds : 'false',
        active: student ? student.active : 'true',
        sendCredentials: student ? student.sendCredentials : false,
        referenceId: student ? student.referenceId : '',
        moreDetails: student ? student.moreDetails : '',
        ExamCount: student ? student.ExamCount : '',
        AverageScores: student ? student.AverageScores : '',
        LastExam: student ? student.LastExam : '',
        TimeTaken: student ? student.TimeTaken : '',
    };

    const [formState, setFormState] = useState<TeacherModel>(initialFormState);
    const { user, signOut } = useAuth();

    function ShapeExample() {
        return (
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <Image src={user?.avatar} width={200} roundedCircle />
                    </Col>

                </Row>
            </Container>
        );
    }

    const navigate = useNavigate();
    const goToEdit = () => {
        navigate(`${myAppConfig.baseURL}/editTecherProfile`)
    }

    return (
        <Card>
            <Card.Header>
                <div className='border-bottom border-2 d-flex justify-content-between align-items-center'>
                    <h4>Profile Details</h4>
                    <Button className='mb-1' onClick={() => updateListMode(false)}><FontAwesomeIcon icon={faEdit} /></Button>
                </div>
            </Card.Header>
            <Card.Body className='pt-0'>
                <Col className='d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <ShapeExample />
                    </div>
                </Col>
                <Row className='pt-4'>
                    <Form.Label><b>Name: </b>{user?.displayName}</Form.Label>
                    <Form.Label><b>Email: </b>{user?.email} </Form.Label>
                    <Form.Label><b>Username: </b>{user?.userName} </Form.Label>
                    <Form.Label><b>Mobile: </b>{user?.mobile} </Form.Label>
                    <Form.Label><b>Identification: </b>{user?.role}</Form.Label>
                    <Form.Label><b>More Details: </b>{user?.moreDetails}</Form.Label>
                    <Form.Label><b>Active: </b>{formState.active}</Form.Label>
                </Row>




            </Card.Body>
        </Card>
    );
}

export default StudentMyAccountSideProfile;
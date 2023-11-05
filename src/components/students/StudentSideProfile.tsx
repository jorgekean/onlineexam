import { faCaretRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faGear, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Form, Row, Container, Image } from 'react-bootstrap'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import avatar1 from "../../assets/img/avatars/avatar.jpg";

// Define the type for the items
type Item = string;

// Define the props interface for the component
interface StudentSideProfileProps {
    // items: Item[];
    onViewProfile: (mode: boolean) => void;
    student?: StudentDataModel;
}

export interface StudentDataModel {
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
}

const StudentSideProfile: React.FC<StudentSideProfileProps> = ({ onViewProfile, student }) => {
    const initialFormState: StudentDataModel = {
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
        moreDetails: student ? student.moreDetails : ''
    };

    const [formState, setFormState] = useState<StudentDataModel>(initialFormState);

    function ShapeExample() {
        return (
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <Image src={avatar1} width={200} roundedCircle />
                    </Col>

                </Row>
            </Container>
        );
    }

    return (
        <Card>
            <Card.Header>
                <h4 className='border-bottom border-2 pb-0'>Profile Details</h4>
            </Card.Header>
            <Card.Body className='pt-0'>
                <Col className='d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <ShapeExample />
                    </div>
                </Col>
                <Row className='pt-4'>
                    <Form.Label><b>Name: </b>{formState.firstName} {formState.lastName}</Form.Label>
                    <Form.Label><b>Email: </b>{formState.email} </Form.Label>
                    <Form.Label><b>Username: </b>{formState.userName} </Form.Label>
                    {/* <Form.Label><b>Password: </b> </Form.Label> */}
                    <Form.Label><b>Subject: </b>{formState.studentSubject} </Form.Label>
                    <Form.Label><b>Mobile: </b>{formState.mobile} </Form.Label>
                    <Form.Label><b>Identification: </b>{formState.uniqueIdentification}</Form.Label>
                    <Form.Label><b>ReferencID: </b>{formState.referenceId}</Form.Label>
                    <Form.Label><b>Special Needs: </b>{formState.specialNeeds}</Form.Label>
                    <Form.Label><b>More Details: </b>{formState.moreDetails}</Form.Label>
                    <Form.Label><b>Active: </b>{formState.active}</Form.Label>

                </Row>




            </Card.Body>
        </Card>
    );
}

export default StudentSideProfile;
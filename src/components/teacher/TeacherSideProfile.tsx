import { faCaretRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faGear, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Form, Row, Container, Image } from 'react-bootstrap'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import avatar1 from "../../assets/img/avatars/avatar.jpg";
import { useNavigate } from 'react-router-dom'
import { myAppConfig } from '../../config'

// Define the type for the items
type Item = string;

// Define the props interface for the component
interface DidYouKnowProps {
    // items: Item[];
    onViewProfile: (mode: boolean) => void;
    teacher?: TeacherModel;
}

export interface TeacherModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
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

const TeacherSideProfile: React.FC<DidYouKnowProps> = ({ onViewProfile, teacher }) => {
    const initialFormState: TeacherModel = {
        id: teacher ? teacher.id : '',
        displayName: teacher ? teacher.displayName : '',
        firstName: teacher ? teacher.firstName : '',
        lastName: teacher ? teacher.lastName : '',
        email: teacher ? teacher.email : '',
        userName: teacher ? teacher.userName : '',
        password: teacher ? teacher.password : '',
        mobile: teacher ? teacher.mobile : '',
        uniqueIdentification: teacher ? teacher.uniqueIdentification : '',
        uniqueIdentificationNumber: teacher ? teacher.uniqueIdentificationNumber : '',
        specialNeeds: teacher ? teacher.specialNeeds : 'false',
        active: teacher ? teacher.active : 'true',
        sendCredentials: teacher ? teacher.sendCredentials : false,
        referenceId: teacher ? teacher.referenceId : '',
        moreDetails: teacher ? teacher.moreDetails : ''
    };

    const [formState, setFormState] = useState<TeacherModel>(initialFormState);

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

    // const navigate = useNavigate();
    // const goToEdit = () => {
    //     navigate(`${myAppConfig.baseURL}/editTecherProfile`)
    // }

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
                    <Form.Label><b>Password: </b> </Form.Label>
                    <Form.Label><b>Mobile: </b>{formState.mobile} </Form.Label>
                    <Form.Label><b>Identification: </b>{formState.uniqueIdentification}</Form.Label>
                    <Form.Label><b>More Details: </b>{formState.moreDetails}</Form.Label>
                    <Form.Label><b>Active: </b>{formState.active}</Form.Label>
                </Row>




            </Card.Body>
        </Card>
    );
}

export default TeacherSideProfile;
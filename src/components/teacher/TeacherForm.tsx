import React, { useEffect } from 'react';
import { Form as FinalForm, Field, FormRenderProps } from 'react-final-form'; // Import from react-final-form
import { faList, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SubjecModel } from '../subjects/SubjectForm';

interface TeacherProps {
    updateListMode: (mode: boolean) => void;
    teacher?: TeacherModel;
}

export interface TeacherModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    teacherSubjects?: { value: string, label: string }[];
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

const TeacherForm: React.FC<TeacherProps> = ({ updateListMode, teacher }) => {
    // Initialize the form state with default values
    const initialFormState: TeacherModel = {
        id: teacher ? teacher.id : '',
        firstName: teacher ? teacher.firstName : '',
        lastName: teacher ? teacher.lastName : '',
        email: teacher ? teacher.email : '',
        userName: teacher ? teacher.userName : '',
        password: teacher ? teacher.password : '',
        teacherSubjects: teacher ? teacher.teacherSubjects : [],
        mobile: teacher ? teacher.mobile : '',
        uniqueIdentification: teacher ? teacher.uniqueIdentification : '',
        uniqueIdentificationNumber: teacher ? teacher.uniqueIdentificationNumber : '',
        referenceId: teacher ? teacher.referenceId : '',
        specialNeeds: teacher ? teacher.specialNeeds : 'false',
        moreDetails: teacher ? teacher.moreDetails : '',
        active: teacher ? teacher.active : 'true',
        sendCredentials: teacher ? teacher.sendCredentials : false,
        displayName: teacher ? teacher.displayName : '',
    }

    const [formState, setFormState] = useState<TeacherModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<TeacherModel>({ tableName: 'teachers' }));
    const [subjectDexieUtils] = useState(DexieUtils<SubjecModel>({ tableName: 'subjects' }));
    const notyf = useContext(NotyfContext);
    const [errors, setErrors] = useState<Partial<TeacherModel>>({});
    const [subjectOptions, setSubjectOptions] = useState<{ value: string, label: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const subjects = await subjectDexieUtils.getAll();

            // Map subjects to options with value and label attributes
            const options = subjects.map(({ subject, description }) => ({
                value: subject,
                label: `${subject} - ${description}`,
            }));
            setSubjectOptions(options)
        };
        fetchData();
    }, []);

    // Handle changes in form inputs and update the form state
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, required } = event.target;

        // Special handling for checkboxes
        let fieldValue = type === 'radio' ? ((event.target as HTMLInputElement).value) : value;
        let checked: boolean
        if (type === 'checkbox') {
            checked = (event.target as HTMLInputElement).checked
        }

        setFormState((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : fieldValue,
        }));

        // Validate the form field and update the error state
        if (required && !fieldValue) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Required!' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const onSave = async () => {
        // Perform the add operation using DexieUtils
        const id = await dexieUtils.add(formState);
        console.log('Added successfully with id:', id);
    }
    const onUpdate = async () => {
        // Perform the update operation using DexieUtils
        await dexieUtils.update(formState);
        console.log('Updated successfully with id:', formState.id);
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (teacher) {
                onUpdate()
            } else {
                onSave()
            }

            // Optionally, you can clear the form after adding
            setFormState(initialFormState);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Teacher saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding teacher:', error);
            // Do error handling here...
        }
    };

    const optionsIdentification = [
        { value: "driverLicence", label: "Driver's License" },
        { value: "umid", label: "UMID" },
        { value: "voterId", label: "Voter's ID" },
    ];

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Teacher</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => {
                            updateListMode(true)
                            console.log(formState)
                        }}><FontAwesomeIcon icon={faList} /> List</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="e.g. John"
                            value={formState.firstName}
                            onChange={handleInputChange}
                            required
                            className={errors.firstName ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="e.g. Doe"
                            value={formState.lastName}
                            onChange={handleInputChange}
                            required
                            className={errors.lastName ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="e.g. johndoe@examplecompany.com"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                            className={errors.email ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            placeholder="Choose Username"
                            value={formState.userName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={handleInputChange}
                            required
                            className={errors.password ? 'is-invalid' : ''}
                        />  {/*add show PW functionality */}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Teacher Subject</Form.Label>
                        <Select
                            className={`react-select-container ${errors.lastName ? 'is-invalid' : ''}`}
                            classNamePrefix="react-select"
                            // defaultValue={formState.studentSubjects}
                            options={subjectOptions as []}
                            isSearchable
                            isMulti={true}
                            closeMenuOnSelect={false}
                            value={formState.teacherSubjects}
                            onChange={(selectedOptions) => {
                                setFormState(
                                    {
                                        ...formState,
                                        teacherSubjects: selectedOptions as []
                                    }
                                )
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobile"
                            placeholder="mobile"
                            value={formState.mobile}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Unique Identification</Form.Label>
                                <Select
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    options={optionsIdentification}
                                    isSearchable
                                    value={optionsIdentification.find((option) => option.value === formState.uniqueIdentification)}
                                    onChange={(selectedOption) => {
                                        if (selectedOption) {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                uniqueIdentification: selectedOption.value,
                                            }));
                                        } else {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                uniqueIdentification: '',
                                            }));
                                        }
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>&nbsp;</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="uniqueIdentificationNumber"
                                    placeholder="Unique Identifier"
                                    value={formState.uniqueIdentificationNumber}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Reference ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="referenceId"
                            placeholder="Reference ID"
                            value={formState.referenceId}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex flex-column">
                        <Form.Label>Special Needs</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                label="Enable"
                                type="radio"
                                name="specialNeeds"
                                value="true" // Set the value for the "Enable" option
                                checked={formState.specialNeeds === "true"} // Check if it's selected
                                onChange={handleInputChange}
                            />
                            <Form.Check
                                inline
                                label={<div> Disable <FontAwesomeIcon icon={faQuestionCircle} /></div>}
                                type="radio"
                                name="specialNeeds"
                                value="false"
                                checked={formState.specialNeeds === "false"} // Check if it's selected
                                onChange={handleInputChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="moreDetails"
                            placeholder="More Details"
                            value={formState.moreDetails}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            inline
                            label="Save as active"
                            type="radio"
                            name="active"
                            value={"true"}
                            checked={formState.active === "true"} // Check if it's selected
                            onChange={handleInputChange}

                        />
                        <Form.Check
                            inline
                            label={<div> Save as Inactive <FontAwesomeIcon icon={faQuestionCircle} /></div>}
                            type="radio"
                            name="active"
                            value={"false"}
                            checked={formState.active === "false"} // Check if it's selected
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            name='sendCredentials'
                            checked={formState.sendCredentials}
                            onChange={handleInputChange}
                            label={<div> Send username & passowrd to this student <FontAwesomeIcon icon={faQuestionCircle} />
                                <Link to={''}>Email Settings & Templates</Link>
                            </div>}
                        />
                    </Form.Group>

                    <Button type='submit' variant="primary me-2">Submit</Button>
                    <Button variant="secondary" onClick={() => updateListMode(true)}>Cancel</Button>
                </Form>
            </Card.Body>
        </Card>
    )


};

export default TeacherForm;

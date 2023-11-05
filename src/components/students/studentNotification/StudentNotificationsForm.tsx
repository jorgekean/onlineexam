import { faCancel, faList, faQuestion, faQuestionCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

import normal from 'react-bootstrap'

import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../../utils/dexie-utils';
import NotyfContext from '../../../contexts/NotyfContext';
import { SectionModel } from '../../sections/SectionsForm';
import ReactQuill from 'react-quill';
// import MultipleChoice from './answers/MultipleChoice';


interface NotificationProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    notification?: NotificationModel;
}

export interface NotificationModel {
    id: string;
    notificationText: string;
    dateCreated: string;
    subjectText: string;
}



const StudentNotificationForm: React.FC<NotificationProps> = ({ updateListMode, notification }) => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            month: 'short',    // "Aug"
            day: 'numeric',    // "2"
            year: 'numeric',   // "2023"
            hour: 'numeric',   // "11"
            minute: 'numeric', // "00"
            second: 'numeric', // "03"
            hour12: true,      // "am/pm" instead of 24-hour format
        });
    };

    // Initialize the form state with default values
    const initialFormState: NotificationModel = {
        id: notification ? notification.id : '',
        notificationText: notification ? notification.notificationText : '',
        subjectText: notification ? notification.subjectText : '',
        dateCreated: formatDate(currentDateTime).toLocaleString()
    };

    const [formState, setFormState] = useState<NotificationModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<NotificationModel>({ tableName: 'notifications' }));
    const notyf = useContext(NotyfContext);
    // Add a state to track errors for each form field
    const [errors, setErrors] = useState<Partial<NotificationModel>>({});
    const [sectionOptions, setSectionOptions] = useState<{ value: string, label: string }[]>([]);

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


    const handleNotificationTextChange = (content: string) => {
        console.log(content)
        setFormState((prevState) => ({
            ...prevState,
            "notificationText": content,
        }));

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
            // Perform the add operation using DexieUtils
            if (notification) {
                onUpdate()
            } else {
                onSave()
            }

            // Optionally, you can clear the form after adding
            setFormState(initialFormState);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Notification saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding notification:', error);
            // Do error handling here...
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Notification</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faList} /> List</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                // placeholder={("Subject")}
                                name='subjectText'
                                onChange={handleInputChange}
                                value={formState.subjectText}
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 question-editor">
                        <Form.Label>Notification</Form.Label>
                        <ReactQuill
                            placeholder=""
                            onChange={handleNotificationTextChange}
                            value={formState.notificationText}
                        // dangerouslySetInnerHTML={{__html: this.state.content}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Group</Form.Label>
                        <Row className='ms-1 mb-5'>
                            <Form.Check
                                inline
                                label="Show to all active candidate (0)"
                                name="group1"
                                type="radio"
                            // id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Show to selected subjects"
                                name="group1"
                                type="radio"
                            // id={`inline-${type}-2`}
                            />
                        </Row>

                    </Form.Group>
                    <Form.Check
                        inline
                        label="Send this notification via email"
                        name="group1"
                    // type="check"
                    // id={`inline-${type}-2`}
                    />
                    <Col>
                        <Button type='submit' variant="primary me-2"><FontAwesomeIcon icon={faSave} /> Submit</Button>
                        <Button variant="secondary" onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faCancel} /> Cancel</Button>
                        <Form.Label className='ms-3'>No active candidate available</Form.Label>
                    </Col>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default StudentNotificationForm
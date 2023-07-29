import { faList, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';

interface GroupsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
}

export interface GroupModel {
    id: string;
    group: string;
    description: string;
}

const GroupsForm: React.FC<GroupsProps> = ({ updateListMode }) => {
    // Initialize the form state with default values
    const initialFormState: GroupModel = {
        id: '',
        group: '',
        description: ''
    };

    const [formState, setFormState] = useState<GroupModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<GroupModel>({ tableName: 'groups' }));
    const notyf = useContext(NotyfContext);
    // Add a state to track errors for each form field
    const [errors, setErrors] = useState<Partial<GroupModel>>({});

    // Handle changes in form inputs and update the form state
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, required } = event.target;

        // Special handling for checkboxes
        const fieldValue = type === 'checkbox' || type === 'radio' ? ((event.target as HTMLInputElement).value) : value;
        setFormState((prevState) => ({
            ...prevState,
            [name]: fieldValue,
        }));

        // Validate the form field and update the error state
        if (required && !fieldValue) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Required!' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Perform the add operation using DexieUtils
            const id = await dexieUtils.add(formState);
            console.log('Added successfully with id:', id);

            // Optionally, you can clear the form after adding
            setFormState(initialFormState);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Groups saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding group:', error);
            // Do error handling here...
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Group</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faList} /> List</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Group</Form.Label>
                        <Form.Control
                            type="text"
                            name="group"
                            placeholder="Group Name"
                            value={formState.group}
                            onChange={handleInputChange}
                            required
                            className={errors.group ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onChange={handleInputChange}
                            className={errors.description ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Button type='submit' variant="primary me-2">Submit</Button>
                    <Button variant="secondary" onClick={() => updateListMode(true)}>Cancel</Button>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default GroupsForm
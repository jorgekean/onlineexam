import React from 'react';
import { Form as FinalForm, Field, FormRenderProps } from 'react-final-form'; // Import from react-final-form
import { faList, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import ReactQuill from 'react-quill';
import Direction from './Directions';

interface DirectionProps {
    updateListMode: (mode: boolean) => void;
    directions?: DirectionModel;
}

export interface DirectionModel {
    id: string;
    directionName: string;
    direction: string;
}



const DirectionForm: React.FC<DirectionProps> = ({ updateListMode, directions }) => {
    const initialFormState: DirectionModel = {
        id: directions ? directions.id : '',
        directionName: directions ? directions.directionName : '',
        direction: directions ? directions.direction : ''
    };

    const [formState, setFormState] = useState<DirectionModel>(initialFormState);
    const [errors, setErrors] = useState<Partial<DirectionModel>>({});
    const dexieUtils = DexieUtils<DirectionModel>({ tableName: 'directions' });
    const notyf = useContext(NotyfContext);


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

    const HandleTextboxInputChange = (content: string) => {
        // console.log(content)
        setFormState((prevState) => ({
            ...prevState,
            "direction": content,
        }));



    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (directions) {
                const id = await dexieUtils.add(formState);
                notyf.open({
                    background: "#4BBF73",
                    message: "Direction Updated!",
                    position: {
                        x: "right",
                        y: "bottom"
                    }
                });
            } else {
                const id = await dexieUtils.add(formState);
                notyf.open({
                    background: "#4BBF73",
                    message: "Direction saved!",
                    position: {
                        x: "right",
                        y: "bottom"
                    }
                });
            }



            // Show a success message


            // go back to list
            updateListMode(true);
        } catch (error) {
            console.error('Error adding Directions:', error);
            // Do error handling here...
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Directions</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(true)}>
                            <FontAwesomeIcon icon={faList} /> List
                        </Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>

                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Direction Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="directionName"
                            placeholder="Direction Name"
                            value={formState.directionName}
                            onChange={handleInputChange}
                            required
                            className={errors.directionName ? 'is-invalid' : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Directions</Form.Label>
                        <ReactQuill
                            value={formState.direction}
                            onChange={HandleTextboxInputChange}
                            className={errors.direction ? 'is-invalid' : ''}
                        />

                    </Form.Group>
                    <Button type='submit' variant="primary me-2">Save</Button>
                    <Button variant="secondary" onClick={() => updateListMode(true)}>Cancel</Button>
                </Form>

            </Card.Body>
        </Card>
    );
};

export default DirectionForm;

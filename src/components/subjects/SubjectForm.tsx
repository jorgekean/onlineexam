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

interface SubjectProps {
    updateListMode: (mode: boolean) => void;
    subject?: SubjecModel;
}

export interface SubjecModel {
    id: string;
    students: string;
    subject: string;
    description: string;
}

const SubjectForm: React.FC<SubjectProps> = ({ updateListMode, subject }) => {
    const dexieUtils = DexieUtils<SubjecModel>({ tableName: 'subjects' });
    const notyf = useContext(NotyfContext);

    // Initialize the form state with default values
    const initialFormState: SubjecModel = {
        id: subject ? subject.id : '',
        // students: subject ? subject.students : '',
        students: '0',
        subject: subject ? subject.subject : '',
        description: subject ? subject.description : '',

    }

    const onSave = async (data: SubjecModel) => {
        // Perform the add operation using DexieUtils
        const id = await dexieUtils.add(data);
        console.log('Added successfully with id:', id);
    }
    const onUpdate = async (data: SubjecModel) => {
        // Perform the update operation using DexieUtils
        await dexieUtils.update(data);
        console.log('Updated successfully with id:', data.id);
    }

    const onSubmit = async (values: SubjecModel, form: any) => {
        try {
            if (subject) {
                onUpdate(values)
            } else {
                onSave(values)
            }

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Sections saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding section:', error);
            // Do error handling here...
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Subject</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faList} /> List</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <FinalForm
                    onSubmit={onSubmit}
                    initialValues={initialFormState}>
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Subject</Form.Label>
                                <Field<string>
                                    name="subject"
                                    validate={(value) => (value ? undefined : 'Required!')} // Add validation if needed
                                >
                                    {({ input, meta }) => (
                                        <div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Subject Name"
                                                required
                                                {...input}
                                                isInvalid={meta.touched && meta.error} // Set isInvalid for Bootstrap form validation
                                            />
                                            {meta.touched && meta.error && (
                                                <Form.Control.Feedback type="invalid">
                                                    {meta.error}
                                                </Form.Control.Feedback>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Field<string>
                                    name="description"
                                >
                                    {({ input }) => (
                                        <div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Description"
                                                required
                                                {...input}

                                            />
                                        </div>
                                    )}
                                </Field>
                            </Form.Group>
                            <Button type='submit' variant="primary me-2">Submit</Button>
                            <Button variant="secondary" onClick={() => updateListMode(true)}>Cancel</Button>
                        </Form>
                    )}
                </FinalForm>
            </Card.Body>
        </Card>

    )


};

export default SubjectForm;

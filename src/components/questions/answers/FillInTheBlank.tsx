import { faAdd, faCheck, faCheckSquare, faList, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap'
import MyEditor, { EditorContent } from '../MyEditor';
import { Field, useForm, useFormState } from 'react-final-form';
import { AnswerModel } from '../QuestionsForm';


interface FillInTheBlankProps {
    defaultChoices?: AnswerModel[]
}

export const fillInTheBlankChoiceDefault = [
    { answerText: '', isCorrect: true, id: '' }
];

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ defaultChoices }) => {

    useEffect(() => {
        // form.change('choices', [...defaultChoices]);
        // form.change('explanation', 'dsa');
    }, []);

    // Get the current form state using react-final-form's useForm and useFormState hooks
    const formState = useFormState();
    const form = useForm();

    // Handler for adding a new choice
    const handleAddChoice = () => {
        const newChoice: AnswerModel = {
            answerText: '',
            isCorrect: true,
            id: '',
        };
        form.change('choices', [...form.getState().values.choices, newChoice]);
    }

    // Handler for removing a choice
    const handleRemoveChoice = (index: number) => {
        const choices = form.getState().values.choices.filter((_: AnswerModel, i: number) => i !== index);

        form.change('choices', choices);
    }

    return (
        <div className='mb-4'>
            <Row>
                {formState.values.choices.map((editor: AnswerModel, index: number) => (
                    <Col md={12} key={index} className='answer-editor'>
                        <Field<string>
                            name={`choices[${index}].answerText`}
                        >
                            {({ input }) => (
                                <div>
                                    <Form.Control
                                        type="text"
                                        placeholder={index === 0 ? "Correct Answer (Required)" : "Other Answer (Optional)"}
                                        className='mb-1'
                                        required={index === 0}  // Only set 'required' for the first choice
                                        {...input}

                                    />
                                </div>
                            )}
                        </Field>
                        <Button size='sm' className='mb-1' title='Remove Choice' variant='danger' onClick={() => handleRemoveChoice(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </Col>
                ))}
            </Row>
            <Button size='sm' onClick={handleAddChoice} className='mt-1'>
                <FontAwesomeIcon icon={faAdd} /> Add New Choice
            </Button>
        </div>
    )
}

export default FillInTheBlank
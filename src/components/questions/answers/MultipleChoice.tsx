import { faAdd, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap'
import React from 'react';
import { Field, useForm, useFormState } from 'react-final-form';
import EditorAdapter from '../../shared/finalformadapter/EditorAdapter';
import { AnswerModel } from '../QuestionsForm';

interface MultipleChoicecProps {
    defaultChoices?: AnswerModel[]
}

export const multipleChoiceDefault = [
    { answerText: '', isCorrect: false, id: '' },
    { answerText: '', isCorrect: false, id: '' },
    { answerText: '', isCorrect: false, id: '' },
    { answerText: '', isCorrect: false, id: '' },
];

const MultipleChoice: React.FC<MultipleChoicecProps> = ({ defaultChoices }) => {
    // State to track the index of the selected correct choice
    const [selectedCorrectIndex, setSelectedCorrectIndex] = useState<number | null>(null);

    // Get the current form state using react-final-form's useForm and useFormState hooks
    const formState = useFormState();
    const form = useForm();

    // On component mount, check if any default choice is marked as correct and update the radio button
    useEffect(() => {
        // form.change('choices', defaultChoices);

        const correctChoiceIndex = form.getState().values.choices.findIndex((choice: AnswerModel) => choice.isCorrect);
        if (correctChoiceIndex !== -1) {
            setSelectedCorrectIndex(correctChoiceIndex);
            form.change('correctAnswer', getLabelForIndex(correctChoiceIndex));
        } else {
            setSelectedCorrectIndex(null);
            form.change('correctAnswer', null);
        }
    }, []);

    // Handler for changing the correctness of a choice
    const handleCorrectnessChange = (index: number, isCorrect: boolean) => {
        const updatedChoices = form.getState().values.choices.map((choice: AnswerModel, i: number) => ({
            ...choice,
            isCorrect: index === i ? isCorrect : false,
        }));
        form.change('choices', updatedChoices);

        if (isCorrect) {
            setSelectedCorrectIndex(index);
            formState.values.choices[index].isCorrect = true;
        } else {
            setSelectedCorrectIndex(null);
        }
    };

    // Handler for adding a new choice
    const handleAddChoice = () => {
        const newChoice: AnswerModel = {
            answerText: '',
            isCorrect: false,
            id: '',
        };
        form.change('choices', [...form.getState().values.choices, newChoice]);
    }

    // Handler for removing a choice
    const handleRemoveChoice = (index: number) => {
        const choices = form.getState().values.choices.filter((_: AnswerModel, i: number) => i !== index);

        form.change('choices', choices);

        // If the removed choice was marked as correct, set correctAnswer to null.
        if (form.getState().values.correctAnswer === getLabelForIndex(index)) {
            form.change('correctAnswer', null);
        }
    }

    // Helper function to generate labels (A, B, C, D, and so on) based on index
    const getLabelForIndex = (index: number) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[index];
    };

    return (
        <div className='mb-4'>
            <Row>
                {formState.values.choices.map((editor: AnswerModel, index: number) => (
                    <Col md={6} key={index} className='answer-editor'>
                        <Field name={"correctAnswer"} type='radio' value='true'>
                            {({ input }) => (
                                <>
                                    <Form.Check
                                        inline
                                        label={getLabelForIndex(index)}
                                        type='radio'
                                        name={"correctAnswer"}
                                        value={getLabelForIndex(index)}
                                        onChange={(event) => {
                                            input.onChange(((event.target as HTMLInputElement).value));
                                            handleCorrectnessChange(index, true);
                                        }}
                                        checked={formState.values.correctAnswer === getLabelForIndex(index)}
                                    />
                                </>
                            )}
                        </Field>
                        {selectedCorrectIndex === index && editor.isCorrect && (
                            <Badge bg="success">
                                <FontAwesomeIcon icon={faCheckSquare} /> Correct
                            </Badge>
                        )}
                        <Field<string>
                            name={`choices[${index}].answerText`}
                            component={EditorAdapter}
                        />
                        <Button size='sm' title='Remove Choice' variant='danger' onClick={() => handleRemoveChoice(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </Col>
                ))}
            </Row>
            <Button size='sm' onClick={handleAddChoice} className='mt-1'>
                <FontAwesomeIcon icon={faAdd} /> Add New Choice
            </Button>
        </div>
    );
}

export default MultipleChoice;

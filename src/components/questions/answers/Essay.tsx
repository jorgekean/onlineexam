import { faAdd, faCheck, faCheckSquare, faList, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap'
import MyEditor, { EditorContent } from '../MyEditor';
import { Field, useForm, useFormState } from 'react-final-form';
import { AnswerModel } from '../QuestionsForm';
import SelectAdapter from '../../shared/finalformadapter/SelectAdapter';
import EditorAdapter from '../../shared/finalformadapter/EditorAdapter';

export const essayChoiceDefault = [
    { answerText: '', isCorrect: true, id: '' }
];

const Essay: React.FC = () => {

    // Get the current form state using react-final-form's useFormState hooks
    const formState = useFormState();

    return (
        <div className='mb-4'>
            <Row>
                {formState.values.choices.map((editor: AnswerModel, index: number) => (
                    <Col md={12} key={index} className=''>
                        To be evaluated by Teacher
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Essay
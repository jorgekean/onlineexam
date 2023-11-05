import { faCancel, faList, faQuestion, faQuestionCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react';
import { Form as FinalForm, Field, FormSpy } from 'react-final-form';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SectionModel } from '../sections/SectionsForm';
import ReactQuill from 'react-quill';
import MultipleChoice, { multipleChoiceDefault } from './answers/MultipleChoice';
import FillInTheBlank, { fillInTheBlankChoiceDefault } from './answers/FillInTheBlank';
import SelectAdapter from '../shared/finalformadapter/SelectAdapter';
import React from 'react';
import EditorAdapter from '../shared/finalformadapter/EditorAdapter';
import { QuestionTypeConst, questionType } from './types';
import TrueOrFalse, { trueOrFalseChoiceDefault } from './answers/TrueOrFalse';
import Essay, { essayChoiceDefault } from './answers/Essay';

interface QuestionsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    question?: QuestionModel;
}

export interface AnswerModel {
    id: string;
    questionId?: string;
    answerText: any;
    isCorrect: boolean;
}

export interface QuestionModel {
    id: string;
    questionType: questionType;
    questionTypeDesc: string;
    section: string;
    questionText: string;
    choices: AnswerModel[]
    // correctAnswers: AnswerModel[]
    explanation?: string;
    status: 'Draft' | 'Published'
    selected?: boolean// leave this here for now we might want to create separate model for the purpose of question picking in exam page
}

// export const getDefaultChoices = (questionType: string) => {
//     // console.log(formState.values)
//     switch (questionType) {
//         case "multipleChoiceRadio":
//         case "multipleChoiceDropdown":
//             return multipleChoiceDefault

//         case "fillInTheBlank":
//             return fillInTheBlankChoiceDefault
//         default:
//         // Code to execute if none of the cases match expression
//     }
// }

const QuestionsForm: React.FC<QuestionsProps> = ({ updateListMode, question }) => {

    // Initialize the form state with default values
    const initialFormState: QuestionModel = {
        id: question ? question.id : '',
        questionType: question ? question.questionType : 'multipleChoiceRadio',
        questionTypeDesc: question ? question.questionTypeDesc : '',
        section: question ? question.section : '',
        questionText: question ? question.questionText : '',
        choices: question ? question.choices : multipleChoiceDefault,
        // correctAnswers: question ? question.correctAnswers : [],
        explanation: question ? question.explanation : '',
        status: question ? question.status : 'Published'
    };

    // const [formState, setFormState] = useState<QuestionModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
    const [answerDexieUtils] = useState(DexieUtils<AnswerModel>({ tableName: 'answers' }));
    const [sectionDexieUtils] = useState(DexieUtils<SectionModel>({ tableName: 'sections' }));
    const notyf = useContext(NotyfContext);
    // Add a state to track errors for each form field
    const [errors, setErrors] = useState<Partial<QuestionModel>>({});
    const [sectionOptions, setSectionOptions] = useState<{ value: string, label: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const sections = await sectionDexieUtils.getAll();

            // Map sections to options with value and label attributes
            const options = sections.map(({ sectionName }) => ({
                value: sectionName,
                label: sectionName,
            }));
            setSectionOptions(options)
        };
        fetchData();
    }, []);

    const handleQuestionTypeChange = (questionType: string, form: any) => {
        useEffect(() => {
            console.log(question, questionType)
            if (!question) {
                switch (questionType) {
                    case QuestionTypeConst.MULTIPLE_CHOICE_RADIO:
                    case QuestionTypeConst.MULTIPLE_CHOICE_DROPDOWN:
                        form.change('choices', multipleChoiceDefault)
                        break;
                    case QuestionTypeConst.FILL_IN_THE_BLANK:
                        form.change('choices', fillInTheBlankChoiceDefault)
                        break;
                    case QuestionTypeConst.TRUE_OR_FALSE:
                        form.change('choices', trueOrFalseChoiceDefault)
                        break;
                    case QuestionTypeConst.ESSAY:
                        form.change('choices', essayChoiceDefault)
                        break;
                    default:
                        null
                        break;
                }
            }

        }, [questionType])
    }

    const onSave = async (ques: QuestionModel) => {
        // Perform the add operation using DexieUtils
        const id = await dexieUtils.add(ques);

        console.log('Added successfully with id:', id);
    }
    const onUpdate = async (ques: QuestionModel) => {
        // Perform the update operation using DexieUtils
        await dexieUtils.update(ques);
        console.log('Updated successfully with id:', ques.id);
    }

    const handleFormSubmit = async (values: QuestionModel) => {

        try {
            values.questionTypeDesc = questionTypeOptions.find(q => q.value === values.questionType)?.label ?? ''
            // Perform the add operation using DexieUtils
            if (question) {
                onUpdate(values)
            } else {
                onSave(values)
            }

            // Optionally, you can clear the form after adding
            // setFormState(initialFormState);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Questions saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding question:', error);
            // Do error handling here...
        }
    };

    const questionTypeOptions = [
        { value: QuestionTypeConst.MULTIPLE_CHOICE_RADIO, label: "Multiple Choice (Radio)" },
        { value: QuestionTypeConst.MULTIPLE_CHOICE_DROPDOWN, label: "Multiple Choice (Dropdown)" },
        { value: QuestionTypeConst.FILL_IN_THE_BLANK, label: "Fill in the Blank" },
        { value: QuestionTypeConst.TRUE_OR_FALSE, label: "True or False" },
        { value: QuestionTypeConst.ESSAY, label: "Essay (Evaluated by Teacher)" },
    ];

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Add New Question</h4>
                    <div className='d-flex gap-1'>
                        <Button onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faList} /> List</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <FinalForm
                    onSubmit={handleFormSubmit}
                    initialValues={initialFormState}>
                    {({ handleSubmit, form }) => (
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Question Type</Form.Label>
                                        <Field<string>
                                            name="questionType"
                                            component={SelectAdapter}
                                            options={questionTypeOptions}
                                            isSearchable
                                            isDisabled={question ? true : false}// disable on edit
                                            required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Section</Form.Label>
                                        <Field<string>
                                            name="section"
                                            component={SelectAdapter}
                                            options={sectionOptions}
                                            isSearchable
                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3 question-editor">
                                <Form.Label>Question</Form.Label>
                                <Field<string>
                                    name="questionText"
                                    component={EditorAdapter}
                                    placeholder="You can type or drag your question here"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Answers</Form.Label>

                                <Field name="questionType">
                                    {({ input: { value } }) => (
                                        <>
                                            {
                                                handleQuestionTypeChange(value, form)
                                            }
                                            {(value === QuestionTypeConst.MULTIPLE_CHOICE_RADIO || value === QuestionTypeConst.MULTIPLE_CHOICE_DROPDOWN) && <MultipleChoice />}
                                            {value === QuestionTypeConst.FILL_IN_THE_BLANK && <FillInTheBlank />}
                                            {value === QuestionTypeConst.TRUE_OR_FALSE && <TrueOrFalse />}
                                            {value === QuestionTypeConst.ESSAY && <Essay />}
                                        </>
                                    )}
                                </Field>
                                {/* <FormSpy subscription={{ values: true }}>
                                    {({ values, form }) => {

                                        // const defaultChoices = getDefaultChoices(values.questionType)
                                        // form.change('choices', defaultChoices);

                                        return (
                                            <React.Fragment>
                                                {JSON.stringify(values)}
                                            </React.Fragment>
                                        )
                                    }}
                                </FormSpy> */}
                            </Form.Group>
                            <Button type='submit' variant="primary me-2"><FontAwesomeIcon icon={faSave} /> Submit</Button>
                            <Button variant="secondary" onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faCancel} /> Cancel</Button>
                        </Form>
                    )}
                </FinalForm>
            </Card.Body>
        </Card>

    )
}

export default QuestionsForm
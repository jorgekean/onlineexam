import { faCancel, faList, faQuestion, faQuestionCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SectionModel } from '../sections/SectionsForm';
import ReactQuill from 'react-quill';
import MultipleChoice from './answers/MultipleChoice';

interface QuestionsProps {
    // listMode?: boolean;
    updateListMode: (mode: boolean) => void;
    question?: QuestionModel;
}

interface AnswerModel {
    id: string;
    questionId: string;
    answerText: string;
    // isCorrect: boolean;
}

export interface QuestionModel {
    id: string;
    questionType: string;
    section: string;
    questionText: string;
    choices?: AnswerModel[]// nullable since question can be fill in the blank
    correctAnswers: AnswerModel[]
    explanation?: string;
    status: 'Draft' | 'Published'
}

const QuestionsForm: React.FC<QuestionsProps> = ({ updateListMode, question }) => {
    // Initialize the form state with default values
    const initialFormState: QuestionModel = {
        id: question ? question.id : '',
        questionType: question ? question.questionType : 'multipleChoiceRadio',
        section: question ? question.section : '',
        questionText: question ? question.questionText : '',
        choices: question ? question.choices : [],
        correctAnswers: question ? question.correctAnswers : [],
        explanation: question ? question.explanation : '',
        status: question ? question.status : 'Published'
    };

    const [formState, setFormState] = useState<QuestionModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
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

    const handleQuestionTextChange = (content: string) => {
        console.log(content)
        setFormState((prevState) => ({
            ...prevState,
            "questionText": content,
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
            if (question) {
                onUpdate()
            } else {
                onSave()
            }

            // Optionally, you can clear the form after adding
            setFormState(initialFormState);

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
        { value: "multipleChoiceRadio", label: "Multiple Choice (Radio)" },
        { value: "multipleChoiceDropdown", label: "Multiple Choice (Dropdown)" },
        { value: "fillInTheBlank", label: "Fill in the Blank" },
        { value: "trueOrFalse", label: "True or False" },
        { value: "essay", label: "Essay (Evaluated by Admin)" },
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
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Question Type</Form.Label>
                                <Select
                                    className={`react-select-container ${errors.questionType ? 'is-invalid' : ''}`}
                                    classNamePrefix="react-select"
                                    options={questionTypeOptions}
                                    isSearchable
                                    value={questionTypeOptions.find((option) => option.value === formState.questionType)}
                                    onChange={(selectedOption) => {
                                        if (selectedOption) {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                questionType: selectedOption.value,
                                            }));
                                        } else {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                questionType: '',
                                            }));
                                        }
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Section</Form.Label>
                                <Select
                                    className={`react-select-container ${errors.questionType ? 'is-invalid' : ''}`}
                                    classNamePrefix="react-select"
                                    options={sectionOptions}
                                    isSearchable
                                    value={sectionOptions.find((option) => option.value === formState.section)}
                                    onChange={(selectedOption) => {
                                        if (selectedOption) {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                section: selectedOption.value,
                                            }));
                                        } else {
                                            setFormState((prevState) => ({
                                                ...prevState,
                                                section: '',
                                            }));
                                        }
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 question-editor">
                        <Form.Label>Question</Form.Label>
                        <ReactQuill
                            placeholder="You can type or drag your question here"
                            onChange={handleQuestionTextChange}
                            value={formState.questionText}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Answers</Form.Label>
                        {(formState.questionType === "multipleChoiceRadio" || formState.questionType === "multipleChoiceDropdown") && <MultipleChoice></MultipleChoice>}
                    </Form.Group>
                    <Button type='submit' variant="primary me-2"><FontAwesomeIcon icon={faSave} /> Submit</Button>
                    <Button variant="secondary" onClick={() => updateListMode(true)}><FontAwesomeIcon icon={faCancel} /> Cancel</Button>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default QuestionsForm
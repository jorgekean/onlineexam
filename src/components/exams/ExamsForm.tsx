import React, { useEffect } from 'react';
import { Form as FinalForm, Field, FormRenderProps, FormSpy } from 'react-final-form'; // Import from react-final-form
import { faList, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import SelectAdapter from '../shared/finalformadapter/SelectAdapter';
import { duration } from 'moment';
import MyTable, { SelectColumnFilter } from '../tables/MyTable';
import { QuestionModel } from '../questions/QuestionsForm';
import DefaultModal from '../shared/modal/DefaultModal';
import PickQuestionModal from './PickQuestionModal';
import Questions from '../questions/Questions';
import { Column } from 'react-table';

interface ExamsProps {
    updateListMode: (mode: boolean) => void;
    setSelectedRow?: (model: ExamModel | undefined) => void;
    // updateViewMode: (mode: boolean) => void;
    exam?: ExamModel;
}

export interface ExamModel {
    id: string;
    examName: string;
    // description: string;
    duration: number;
    negativeMarks: string;
    startTime: string;
    questionPicking: number;
    questionsCount?: number;
    selectedQuestions: QuestionModel[] | undefined;
    progress?: { totalScored: number, totalEssays: number }
}


export interface ExamFormModel {
    exam: ExamModel;
    openPickQuestionModal: boolean;
}

const ExamsForm: React.FC<ExamsProps> = ({ updateListMode, exam }) => {
    const dexieUtils = DexieUtils<ExamModel>({ tableName: 'exams' });
    const notyf = useContext(NotyfContext);
    const [openPickQuestionModal, setOpenPickQuestionModal] = useState<boolean>(false);
    const [selectedQuestions, setSelectedQuestions] = useState<QuestionModel[]>([]);

    // Initialize the form state with default values
    const initialFormState: ExamModel = {

        id: exam ? exam.id : '',
        examName: exam ? exam.examName : '',
        duration: exam ? exam.duration : 60,
        startTime: exam? exam.startTime : "8:00",
        negativeMarks: exam ? exam.negativeMarks : 'doNotApply',
        questionPicking: exam ? exam.questionPicking : 3,
        selectedQuestions: exam ? exam.selectedQuestions : undefined
    }


    useEffect(() => {
        const fetchData = async () => {
            console.log(exam, "exam")
            if (exam && exam.selectedQuestions) {
                setSelectedQuestions(exam.selectedQuestions)
            }
            console.log(initialFormState, "initialFormState")
        };
        fetchData();
    }, [initialFormState.selectedQuestions]);


    const togglePickQuestionModal = () => {
        setOpenPickQuestionModal(!openPickQuestionModal);
    };

    const handleSavePickQuestion = (questions: QuestionModel[]) => {
        // save logic
        console.log(questions, "quesitons")
        // bind selected questions        
        setSelectedQuestions(questions.map((q: any) => q.values))

        // close modal
        togglePickQuestionModal();
    };

    const onSave = async (data: ExamModel) => {
        // Perform the add operation using DexieUtils
        const id = await dexieUtils.add(data);
        console.log('Added successfully with id:', id);
    }
    const onUpdate = async (data: ExamModel) => {
        // Perform the update operation using DexieUtils
        await dexieUtils.update(data);
        console.log('Updated successfully with id:', data.id);
    }

    const onSubmit = async (values: ExamModel, form: any) => {
        try {
            // bind selected questions
            values.selectedQuestions = selectedQuestions

            // save or update
            if (exam) {
                onUpdate(values)
            } else {
                onSave(values)
            }

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Exams saved!",
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

    const durationOptions = [
        { value: 1, label: "1 minute" },
        { value: 2, label: "2 minutes" },
        { value: 3, label: "3 minutes" },
        { value: 4, label: "4 minutes" },
        { value: 5, label: "5 minutes" },
        { value: 10, label: "10 minutes" },
        { value: 15, label: "15 minutes" },
        { value: 20, label: "20 minutes" },
        { value: 30, label: "30 minutes" },
        { value: 45, label: "45 minutes" },
        { value: 60, label: "1 hour" },
        { value: 75, label: "1 hour 15 minutes" },
        { value: 90, label: "1 hour 30 minutes" },
        { value: 105, label: "1 hour 45 minutes" },
        { value: 120, label: "2 hours" },
        { value: 135, label: "2 hours 15 minutes" },
        { value: 150, label: "2 hours 30 minutes" },
        { value: 165, label: "2 hours 45 minutes" },
        { value: 180, label: "3 hours" },
        { value: 195, label: "3 hours 15 minutes" },
        { value: 210, label: "3 hours 30 minutes" },
        { value: 225, label: "3 hours 45 minutes" },
        { value: 240, label: "4 hours" },
        { value: 0, label: "Unlimited" },
    ];


    const negativeMarksOptions = [
        { value: 'doNotApply', label: "Do not apply" },
        { value: 'applyFromQuestionBank', label: "Apply from question bank" },
        { value: 'apply10Percent', label: "Apply 10% negative marks for this exam" },
        { value: 'apply12_5Percent', label: "Apply 12.5% negative marks for this exam" },
        { value: 'apply20Percent', label: "Apply 20% negative marks for this exam" },
        { value: 'apply25Percent', label: "Apply 25% negative marks for this exam" },
        { value: 'apply50Percent', label: "Apply 50% negative marks for this exam" },
        { value: 'apply75Percent', label: "Apply 75% negative marks for this exam" },
        { value: 'apply100Percent', label: "Apply 100% negative marks for this exam" }
    ];

    const questionPickingOptions = [
        { value: 1, label: "Auto Pick (Different questions for all candidates)" },
        { value: 2, label: "Auto Pick (Same questions for all candidates)" },
        { value: 3, label: "Manual Pick" }
    ];

    const tableColumns: Column[] | any = [
        {
            Header: "Section",
            accessor: "section",
            filter: true,
            Filter: SelectColumnFilter
        },
        {
            Header: "Question",
            accessor: "questionText",
        }
    ];

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>{exam ? 'Modify' : 'Add New'} Exam</h4>
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
                                <Form.Label>Exam</Form.Label>
                                <Field<string>
                                    name="examName"
                                    validate={(value) => (value ? undefined : 'Required!')} // Add validation if needed
                                >
                                    {({ input, meta }) => (
                                        <div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Exam Name"
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
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Duration</Form.Label>
                                        <Field<string>
                                            name="duration"
                                            component={SelectAdapter}
                                            options={durationOptions}
                                            isSearchable
                                            required />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Negative Marks</Form.Label>
                                        <Field<string>
                                            name="negativeMarks"
                                            component={SelectAdapter}
                                            options={negativeMarksOptions}
                                            isSearchable
                                            required />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Question Picking</Form.Label>
                                        <Field<string>
                                            name="questionPicking"
                                            component={SelectAdapter}
                                            options={questionPickingOptions}
                                            isSearchable
                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type='button' size="sm" variant="primary me-2" onClick={togglePickQuestionModal}>Pick Questions</Button>
                                </Col>
                            </Row>
                            <Row>
                                <MyTable columns={tableColumns} data={selectedQuestions as []} useDangerouslySetInnerHTM={true}></MyTable>
                                {/* <Container fluid className="p-0">
                                    <Tabs tabs={[{ eventKey: "math", title: "Math", content: <MyTable columns={tableColumns} data={selectedQuestions as []}></MyTable> },
                                    { eventKey: "science", title: "Science", content: <MyTable columns={tableColumns} data={selectedQuestions as []}></MyTable> }]}></Tabs>
                                </Container> */}
                            </Row>

                            <div className='mt-4'>
                                <Button type='submit' variant="primary me-2">Submit</Button>
                                <Button variant="secondary" onClick={() => updateListMode(true)}>Cancel</Button>
                            </div>

                            {/* Pick Question Modal */}
                            <PickQuestionModal
                                show={openPickQuestionModal}
                                onClose={togglePickQuestionModal}
                                onSave={handleSavePickQuestion}
                                initialSelectedQuestions={selectedQuestions}
                            />

                            {/* <FormSpy subscription={{ values: true }}>
                                {({ values }) => (
                                    <div>
                                        <h3>Form Data</h3>
                                        <pre>{JSON.stringify(values)}</pre>
                                    </div>
                                )}
                            </FormSpy> */}
                        </Form>
                    )}
                </FinalForm>
            </Card.Body>
        </Card>

    )


};

export default ExamsForm;

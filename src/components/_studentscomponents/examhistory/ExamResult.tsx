import React, { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { Container, Row, Col, Card, ProgressBar, Badge, Tabs, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubjectForm, { SubjecModel } from "../../../components/subjects/SubjectForm";
import RelatedTasks from "../../../components/relatedtask/RelatedTasks";
import DidYouKnow from "../../../components/wiki/DidYouKnow";
import { ExamModel } from "../../../components/exams/ExamsForm";
import Exam from "../../../components/_studentscomponents/exam/Exam";
import DefaultModal from "../../../components/shared/modal/DefaultModal";
import ExamInstruction from "../../../components/_studentscomponents/exam/ExamInstructionsModal";
import { ExamResultsModel } from "../../../pages/_studentspages/exams/TakeExam";
import DexieUtils from "../../../utils/dexie-utils";
import { useParams } from "react-router";
import PieChart from "../../../components/charts/PieChart";
import usePalette from "../../../hooks/usePalette";
import DoughnutChart from "../../../components/charts/DoughnutChart";
import MyTable from "../../../components/tables/MyTable";
import Tab from 'react-bootstrap/Tab';
import StudentList from "../../../components/_studentscomponents/examhistory/StudentList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faGear, faPlus, faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons'

import { Link, useNavigate } from 'react-router-dom';
import { myAppConfig } from '../../../config';
import ReactToPrint from "react-to-print";
import PrintResults from "../../../pages/_studentspages/exams/PrintResults";
import { QuestionModel } from "../../../components/questions/QuestionsForm";
import { questionType } from "../../../components/questions/types";


interface StatusBadgeProps {
    status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    let variant: string;

    if (status === "correct") {
        variant = "success";
    } else if (status === "incorrect") {
        variant = "danger";
    } else {
        variant = "warning";
    }

    return <Badge bg={variant}>{status}</Badge>;
};

interface PrintResultsQuestionModel {
    questionNumber: number,
    questionId: string,
    question: string,
    questionType: questionType,
    userAnswer: string | number | boolean,
    correctAnswer: string | number | boolean,
    choices?: string[]
}

export interface PrintExamResultsModel {
    id: string;
    examId: string;
    examName: string;
    userId: string;
    userDisplayName: string;
    totalCorrectAnswers: number;
    totalQuestions: number;
    accuracyRatio?: number;
    result?: string;
    questions: PrintResultsQuestionModel[]
}

interface ExamResultPageProps {
    // examResultId: string;
    children?: ReactNode;
}

const ExamResultPage: React.FC<ExamResultPageProps> = ({ children }) => {
    const { id } = useParams();
    const palette = usePalette();
    // const [printMode, setPrintMode] = useState(false);

    const [examResult, setExamResult] = useState<PrintExamResultsModel>()

    const dexieUtils = DexieUtils<ExamResultsModel>({ tableName: 'examresults' });
    const questionDexieUtils = DexieUtils<QuestionModel>({ tableName: 'questions' });

    // Ref for the PrintableContent component
    const printableContentRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await dexieUtils.get(id)
                if (data) {
                    const updatedQuestions: PrintResultsQuestionModel[] = [];

                    // Create an array of promises for fetching question details
                    const fetchPromises = data.answers.map(async (question, qIndex) => {
                        const questionDetails = await questionDexieUtils.get(question.questionId);

                        if (questionDetails) {
                            const correctAnswerIndex = questionDetails.choices.findIndex(choice => choice.isCorrect);
                            const userAnswerIndex = questionDetails.choices.findIndex(choice => choice.answerText === question.userAnswer[0]);
                            // alert(questionDetails.choices[correctAnswerIndex].answerText)
                            updatedQuestions.push({
                                questionNumber: qIndex + 1,
                                questionId: questionDetails.id,
                                question: questionDetails.questionText,
                                questionType: questionDetails.questionType,
                                correctAnswer: questionDetails.questionType === "trueOrFalse" ? questionDetails.choices[correctAnswerIndex].answerText === "true" : questionDetails.questionType === "fillInTheBlank" ? questionDetails.choices[correctAnswerIndex].answerText : correctAnswerIndex,
                                userAnswer: questionDetails.questionType === "trueOrFalse" ? question.userAnswer[userAnswerIndex] === "true" : questionDetails.questionType === "fillInTheBlank" ? question.userAnswer[userAnswerIndex] : userAnswerIndex,
                                choices: questionDetails.choices.map(ch => ch.answerText)
                            } as PrintResultsQuestionModel);
                        }
                    });

                    // Wait for all promises to resolve before setting examResult
                    await Promise.all(fetchPromises);

                    const updatedData: PrintExamResultsModel = { ...data, questions: updatedQuestions };

                    setExamResult(updatedData)
                    console.log(updatedData)
                }
            }
        }
        fetchData();
    }, [])

    // // Generate labels and data based on examResultData
    // const dataMap = new Map<string, number>();
    // examResult?.answers.forEach(ans => {
    //     const { status } = ans;
    //     if (dataMap.has(status)) {
    //         dataMap.set(status, dataMap.get(status)! + 1);
    //     } else {
    //         dataMap.set(status, 1);
    //     }
    // });

    // const labels = Array.from(dataMap.keys());
    // const dataValues = Array.from(dataMap.values());
    // const data = {
    //     labels: labels,
    //     datasets: [
    //         {
    //             data: dataValues,
    //             backgroundColor: [
    //                 palette.primary,
    //                 palette.warning,
    //                 palette.info,
    //                 palette.danger,
    //                 palette.success,
    //                 "#E8EAED",
    //             ],
    //             borderColor: "transparent",
    //         },
    //     ],
    // };

    // const options = {
    //     maintainAspectRatio: false,
    //     plugins: {
    //         legend: {
    //             display: true,
    //         },
    //     },
    // };

    // const tableColumns = [
    //     {
    //         Header: "Question",
    //         accessor: "questionText",
    //     },
    //     // {
    //     //     Header: "Your Answer",
    //     //     accessor: "userAnser",
    //     //     Cell: ({ value }: { value: any }) => <StatusBadge status={value} />,
    //     // },
    //     {
    //         Header: "Status",
    //         accessor: "status",
    //         Cell: ({ value }: { value: any }) => <StatusBadge status={value} />,
    //     }
    // ];

    const navigate = useNavigate();

    const sampleData = [
        {
            questionNumber: 1,
            question: "What is the capital of France?",
            questionType: "multipleChoice",
            choices: ["Paris", "London", "Berlin", "Rome"],
            correctAnswer: 0,
            userAnswer: 0,
        },
        {
            questionNumber: 2,
            question: "Who wrote the play 'Romeo and Juliet'?",
            questionType: "multipleChoice",
            choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
            correctAnswer: 0,
            userAnswer: 1,
        },
        {
            questionNumber: 3,
            question: "The Earth revolves around the Sun. (True/False)",
            questionType: "trueOrFalse",
            correctAnswer: true,
            userAnswer: false,
        },
        {
            questionNumber: 4,
            question: "Complete the sentence: 'Water boils at ____ degrees Celsius.'",
            questionType: "fillInTheBlank",
            correctAnswer: "100",
            userAnswer: "90",
        },
        {
            questionNumber: 5,
            question: "What is the largest planet in our solar system?",
            questionType: "multipleChoice",
            choices: ["Earth", "Jupiter", "Mars", "Venus"],
            correctAnswer: 1,
            userAnswer: 1,
        },
        {
            questionNumber: 6,
            question: "Albert Einstein developed the theory of relativity. (True/False)",
            questionType: "trueOrFalse",
            correctAnswer: true,
            userAnswer: true,
        },
        {
            questionNumber: 7,
            question: "The process of photosynthesis converts sunlight into ________ and oxygen.",
            questionType: "fillInTheBlank",
            correctAnswer: "glucose",
            userAnswer: "energy",
        },
        // Add more items here...
    ];

    // const handleBeforePrint = () => {
    //     setPrintMode(true);
    // };
    // const handleAfterPrint = () => {
    //     setPrintMode(false);
    // };

    return (
        <React.Fragment>
            <Helmet title="Exam Results" />
            <div className='d-flex justify-content-between align-items-center mb-4'>

                <h4>Exam Results</h4>

                <div className='d-flex gap-1'>
                    <Button onClick={() => { navigate(`${myAppConfig.baseURL}/exams`); }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>

                    {/* ReactToPrint button */}
                    <ReactToPrint
                        trigger={() => <Button><FontAwesomeIcon icon={faPrint} /> Print</Button>}
                        content={() => printableContentRef.current}
                    // onBeforePrint={handleBeforePrint}
                    // onAfterPrint={handleAfterPrint}
                    />
                </div>

            </div>
            <Tabs
                defaultActiveKey="examStatistics"
                id="uncontrolled-tab-example"
                className="mb-3 mt-2"
            >

                <Tab eventKey="examStatistics" title="Exam Statitics">
                    {examResult &&
                        <Container fluid className="p-0 pt-4" ref={printableContentRef}>
                            {/* <h1 className="h3 mb-3">Plans & Pricing</h1> */}

                            <Row>
                                <Col md="10" xl="8" className="mx-auto">
                                    <h1 className="text-center">{examResult.examName}</h1>
                                    <h3 className="text-center">You {(examResult.accuracyRatio as number) < 50 ? <span className="text-danger">Fail</span> : <span className="text-success">Pass</span>} </h3>
                                    <ProgressBar variant={examResult.accuracyRatio && examResult.accuracyRatio < 50 ? 'danger' : 'success'} now={examResult.accuracyRatio} label={`${examResult.accuracyRatio}%`} />
                                    <h4 className="text-center mt-2">Passing score is 50% </h4>
                                    <hr />
                                    {/* 
                            <div className="text-center my-4">
                                <h2>Frequently asked questions</h2>
                            </div> */}
                                </Col>
                            </Row>
                            {/* {!printMode && <Row className="exclude-from-print">
                                <Col md={6}>
                                    <DoughnutChart title={"Results"} subtitle={"Total number of correct, incorrect, and unanswered answers."} chartData={data} chartOptions={options} />
                                </Col>
                                <Col md={6}>
                                    <PieChart title={"Other Chart here"} subtitle={"This is dummy only"} chartData={data} chartOptions={options} />
                                </Col>
                            </Row>} */}

                            {/* <Row>
                                <Card>
                                    <Card.Header>
                                         <h4>Summary of Answers</h4> 
                                    </Card.Header>
                                    <Card.Body>
                                        <MyTable columns={tableColumns} data={examResult.answers} useDangerouslySetInnerHTM={true}></MyTable>
                                    </Card.Body>
                                </Card>

                            </Row>*/}
                            <Row>
                                {examResult.questions.map((data, index) => (
                                    <PrintResults
                                        questionNumber={data.questionNumber}
                                        key={index}
                                        question={data.question}
                                        questionType={data.questionType}
                                        choices={data.choices}
                                        correctAnswer={data.correctAnswer}
                                        userAnswer={data.userAnswer}
                                    />
                                ))}
                            </Row>
                        </Container>
                    }
                </Tab>

                <Tab eventKey="studentList" title="Student List">
                    <StudentList />
                </Tab>
            </Tabs>

        </React.Fragment>
    )
}

export default ExamResultPage
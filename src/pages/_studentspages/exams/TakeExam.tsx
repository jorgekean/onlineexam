import { faArrowLeft, faArrowRight, faBookOpen, faCheckCircle, faCheckDouble, faClockFour, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { Button, Card, Col, Form, ListGroup, Modal, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { ExamModel } from "../../../components/exams/ExamsForm";
import DexieUtils from "../../../utils/dexie-utils";
import { AnswerModel, QuestionModel } from "../../../components/questions/QuestionsForm";
import MultipleChoice from "./choices/MultipleChoice";
import FillInTheBlank from "./choices/FillInTheBlank";
import Essay from "./choices/Essay";
import TrueOrFalse from "./choices/TrueOrFalse";
import useAuth from "../../../hooks/useAuth";
import { displayName } from "react-quill";
import { myAppConfig } from "../../../config";
import useSidebar from "../../../hooks/useSidebar";
import Timer from "../../../components/_studentscomponents/exam/Timer";

interface NavigationItem {
    id: string;
    title: string;
    href: string;
    content: string;
}

interface TakeExamProps {
    children?: ReactNode;
}

interface QuestionInfoProps {
    text: string | undefined;
    questionType: string | undefined;
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ text, questionType }) => (
    <Card>
        <Card.Header>
            <Card.Title className="mb-0">Question</Card.Title>
        </Card.Header>
        <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: text ?? "" }} />
            {/* <p>{text}</p> */}
        </Card.Body>
    </Card>
);

interface FinishExamConfirmationModalProps {
    show: boolean;
    onClose: () => void;
    onSave: () => void;
    // Use the '...rest' pattern to capture other props
    [key: string]: any;
}
const FinishExamConfirmationModal: React.FC<FinishExamConfirmationModalProps> = ({ show, onClose, onSave }) => (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton><h3>{"Finish Exam"}</h3></Modal.Header>
        <Modal.Body className="m-3">
            <p>Are you sure you want to finish the exam?</p>
            <p className="text-danger fw-bold">You cannot resume this exam once you finished it.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>{" "}
            <Button variant={"success"} onClick={onSave}>
                <FontAwesomeIcon icon={faCheckDouble} /> {"Finish"}
            </Button>
        </Modal.Footer>
    </Modal>
);

const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
        month: 'short',    // "Aug"
        day: 'numeric',    // "2"
        year: 'numeric',   // "2023"
        hour: 'numeric',   // "11"
        minute: 'numeric', // "00"
        second: 'numeric', // "03"
        hour12: true,      // "am/pm" instead of 24-hour format
    });
}

export interface ExamResultsModel {
    id: string;
    examResultId?: string;// this will store id as well - workaround since mytable always hide id column
    examId: string;
    examName: string;
    userId: string;
    userDisplayName: string;
    totalCorrectAnswers: number;
    totalQuestions: number;
    accuracyRatio: number;
    result?: string;
    duration?: number;
    startDateAndTime?: string;
    endDate?: Date | undefined;
    progress: string;
    answers: { questionId: string, questionText: string, userAnswer: any, status: string, isCorrect?: boolean, score?: number }[],
}

export interface ExamResultAnswerModel {
    questionId: string,
    questionText: string,
    userAnswer: any,
    status: string,
    isCorrect?: boolean,
    score?: number
    endDateAndTime?: string;
    answers: { questionId: string, questionText: string, userAnswer: any, status: string, isCorrect: boolean }[]
}

const TakeExamPage: React.FC<TakeExamProps> = ({ children }) => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { isOpen, setIsOpen } = useSidebar();

    const [currentDateTime, setCurrentDateTime] = useState(new Date());


    const [selectedExam, setSelectedExam] = useState<ExamModel>();
    const [selectedItemId, setSelectedItemId] = useState<string>('');
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
    const [selectedQuestion, setSelectedQuestion] = useState<QuestionModel>();
    const [openFinishConfirModal, setOpenFinishConfirModal] = useState<boolean>(false);

    const examResultDexieUtils = DexieUtils<ExamResultsModel>({ tableName: 'examresults' });
    const dexieUtils = DexieUtils<ExamModel>({ tableName: 'exams' });
    const questionsDexieUtils = DexieUtils<QuestionModel>({ tableName: 'questions' });

    const [questions, setQuestions] = useState<QuestionModel[] | undefined>(undefined)
    const [navItems, setNavItems] = useState<NavigationItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const exam = await dexieUtils.get(id)
                const selectedQuestions = exam?.selectedQuestions
                const questionaires = await questionsDexieUtils.getByIds(selectedQuestions?.map(s => s.id) ?? [])

                setSelectedExam(exam)
                setQuestions(questionaires)

                if (questionaires) {
                    const tempNavItems = questionaires.map((q, ix) => ({
                        id: q.id,
                        title: (ix + 1).toString(),
                        href: '#',
                        content: q.questionText
                    }))
                    setNavItems(tempNavItems as [])
                }
            }

            // set sidebar to close by default
            setIsOpen(false)
        };
        fetchData();

        return () => {
            // clear answers when navigate to other pages/components            
            clearAnswerSessionStorage();
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const firstQuestion = navItems.length > 0 ? navItems[0].id : '';
            setSelectedItemId(firstQuestion)
        };
        fetchData();
    }, [navItems])

    useEffect(() => {
        const fetchData = async () => {
            const selected = questions?.find(f => f.id === selectedItemId)
            setSelectedQuestion(selected)
        };
        fetchData();
    }, [selectedItemId, selectedItemIndex])

    const toggleFinishConfirmModal = () => {
        setOpenFinishConfirModal(!openFinishConfirModal);
    };

    const clearAnswerSessionStorage = () => {
        Object.keys(sessionStorage).forEach(key => {
            if (key.startsWith("answer")) {
                sessionStorage.removeItem(key);
            }
        });
    }
    const handleItemClick = (itemId: string) => {
        const itemIndex = navItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            setSelectedItemIndex(itemIndex);
            setSelectedItemId(itemId);
        }
    };

    const handlePreviousClick = () => {
        if (selectedItemIndex > 0) {
            setSelectedItemIndex(selectedItemIndex - 1);
            setSelectedItemId(navItems[selectedItemIndex - 1].id);
        }
    };

    const handleNextClick = () => {
        if (selectedItemIndex < navItems.length - 1) {
            setSelectedItemIndex(selectedItemIndex + 1);
            setSelectedItemId(navItems[selectedItemIndex + 1].id);
        }
    };

    const handleFinishExamClick = () => {
        toggleFinishConfirmModal()
    };

    const handleConfirmExamFinishClick = async () => {
        // get user answers from session storage
        const userAnswers = Object.keys(sessionStorage)
            .filter(key => key.startsWith("answer"))
            .map(key => {
                const value = sessionStorage.getItem(key);
                if (value) {
                    const [firstPart, secondPart] = value.split("_");
                    return { questionId: firstPart, answer: secondPart };
                }

            });
        console.log(userAnswers, questions)

        if (questions && userAnswers) {
            const correctAnswers = questions.map(question => {
                const userAnswer = userAnswers.find(answer => answer && answer.questionId === question.id);
                if (userAnswer) {
                    const correctChoices = question.choices.filter(choice => choice.isCorrect);
                    const userSelectedChoices = userAnswer.answer.split(",");

                    const correctAnswerTexts = correctChoices.map(choice => choice.answerText);
                    console.log(correctAnswerTexts, "correctAnswerTexts", userSelectedChoices)
                    const userAnswerTexts = userSelectedChoices.map(usc => {
                        const matchedChoice = correctAnswerTexts.find(ca => ca.toLowerCase() === usc.toLowerCase());
                        return matchedChoice ? matchedChoice : "";
                    });

                    const isCorrect = correctAnswerTexts.join(",") === userAnswerTexts.join(",");
                    return { questionId: question.id, questionText: question.questionText, userAnswer: userAnswerTexts, isCorrect: isCorrect, status: isCorrect ? 'correct' : 'incorrect' };
                }
                else {
                    return { questionId: question.id, questionText: question.questionText, userAnswer: [], isCorrect: false, status: 'unanswered' };
                }
            });

            const totalQuestions = questions.length;
            const correctCount = correctAnswers.filter(answer => {
                return answer && answer.isCorrect
            }).length;

            const accuracyRatio = (correctCount / totalQuestions) * 100;
            console.log(`Correct answers: ${correctCount} out of ${totalQuestions}`);
            console.log(`Accuracy: ${accuracyRatio}%`);
            // possinle redirect to results page ?

            const examResultId = await examResultDexieUtils.add({
                examId: selectedExam?.id as string,
                examName: selectedExam?.examName as string,
                userId: user?.id as string,
                duration: selectedExam?.duration as number,
                userDisplayName: user?.displayName as string,
                answers: correctAnswers,
                totalCorrectAnswers: correctCount,
                totalQuestions: totalQuestions,
                accuracyRatio: accuracyRatio,
                startDateAndTime: formatDate(currentDateTime).toLocaleString(),
                progress: '100',
                endDateAndTime: formatDate(currentDateTime).toLocaleString(),

                result: accuracyRatio >= 50 ? 'Passed' : 'Failed',
                endDate: new Date(),
                id: ''
            } as ExamResultsModel)

            if (examResultId) {
                navigate(`${myAppConfig.studentBaseURL}/student-exam-result/${examResultId}`);
            }
        }

        toggleFinishConfirmModal()
    };



    return (
        <React.Fragment>
            <Helmet title="Exam Ongoing" />
            <Row>
                <Col md="3" xl="2">
                    <Card>
                        <Card.Header>
                            <Card.Title className="mb-0">{selectedExam && <Timer duration={(selectedExam.duration)} />}</Card.Title>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {navItems.map((item) => (
                                <ListGroup.Item
                                    key={item.id}
                                    href={item.href}
                                    action
                                    active={item.id === selectedItemId}
                                    onClick={() => handleItemClick(item.id)}
                                >
                                    {item.title}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
                <Col md="9" xl="10">
                    <QuestionInfo text={navItems.find((item) => item.id === selectedItemId)?.content} questionType={selectedQuestion?.questionType} />
                    {
                        selectedQuestion && (selectedQuestion.questionType === "multipleChoiceDropdown" || selectedQuestion.questionType === "multipleChoiceRadio")
                        && <MultipleChoice questionId={selectedItemId} choices={selectedQuestion?.choices} />
                    }
                    {
                        selectedQuestion && (selectedQuestion.questionType === "fillInTheBlank")
                        && <FillInTheBlank questionId={selectedItemId} />
                    }
                    {
                        selectedQuestion && (selectedQuestion.questionType === "essay")
                        && <Essay questionId={selectedItemId} />
                    }
                    {
                        selectedQuestion && (selectedQuestion.questionType === "trueOrFalse")
                        && <TrueOrFalse questionId={selectedItemId} />
                    }

                    <Card>
                        <Card.Footer>
                            <div className="d-flex justify-content-between">
                                <div>
                                    {
                                        selectedItemIndex === navItems.length - 1 &&
                                        <Button
                                            variant="success"
                                            title="This will end the exam and submit your answers"
                                            onClick={handleFinishExamClick}
                                        >
                                            <FontAwesomeIcon icon={faCheckCircle} /> Finish Exam
                                        </Button>
                                    }
                                </div>
                                <div>
                                    <Button
                                        variant="outline-primary"
                                        title="Previous question"
                                        onClick={handlePreviousClick}
                                        className="me-2" // Add margin to separate buttons
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} /> Prev
                                    </Button>
                                    <Button
                                        variant="outline-primary"
                                        title="Next question"
                                        onClick={handleNextClick}
                                    >
                                        Next <FontAwesomeIcon icon={faArrowRight} />
                                    </Button>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <FinishExamConfirmationModal
                show={openFinishConfirModal}
                onClose={toggleFinishConfirmModal}
                onSave={handleConfirmExamFinishClick}>
            </FinishExamConfirmationModal>
        </React.Fragment>
    )
}

export default TakeExamPage
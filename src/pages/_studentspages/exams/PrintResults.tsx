import React from "react";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

interface PrintResultsProps {
    questionNumber: number;
    question: string;
    questionType: string; //"multipleChoice" | "fillInTheBlank" | "trueOrFalse";
    choices?: string[];
    correctAnswer: number | string | boolean;
    userAnswer: number | string | boolean;
}

const PrintResults: React.FC<PrintResultsProps> = ({ questionNumber, question, questionType, choices, correctAnswer, userAnswer }) => {
    const abcLabels = ["A", "B", "C", "D"];

    return (
        <Card className="mb-3">
            <Card.Header>
                <strong>Question {questionNumber}:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: question }} />
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {questionType.includes("multipleChoice") && choices && (
                        choices.map((choice, index) => (
                            <ListGroupItem key={index}>
                                <strong>{abcLabels[index]}. </strong>
                                {correctAnswer === index && <Badge bg="success">Correct</Badge>} {<span className="d-inline-block" dangerouslySetInnerHTML={{ __html: choice }} />}
                                {userAnswer === index && <Badge bg="warning">Your Answer</Badge>}
                            </ListGroupItem>
                        ))
                    )}
                    {questionType === "fillInTheBlank" && (
                        <ListGroupItem>
                            <strong>Correct Answer:</strong> {correctAnswer}
                            <br />
                            <strong>Your Answer:</strong> {userAnswer}
                            {correctAnswer === userAnswer && <Badge bg="success">Correct</Badge>}
                            {correctAnswer !== userAnswer && <Badge bg="danger">Incorrect</Badge>}
                        </ListGroupItem>
                    )}
                    {questionType === "trueOrFalse" && (
                        <ListGroupItem>
                            <strong>Correct Answer:</strong> {correctAnswer ? "True" : "False"}
                            <br />
                            <strong>Your Answer:</strong> {userAnswer ? "True" : "False"}
                            {correctAnswer === userAnswer && <Badge bg="success">Correct</Badge>}
                            {correctAnswer !== userAnswer && <Badge bg="danger">Incorrect</Badge>}
                        </ListGroupItem>
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default PrintResults;

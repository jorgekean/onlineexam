import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { AnswerModel } from "../../../../components/questions/QuestionsForm";
import { useEffect, useState } from "react";

interface AnswerInfoProps {
    questionId: string;
}

// Example choices for True or False question type
const choices: AnswerModel[] = [
    {
        id: '',
        answerText: 'True',
        isCorrect: false // Set the correct value
    },
    {
        id: '',
        answerText: 'False',
        isCorrect: false // Set the correct value
    }
];

const TrueOrFalse: React.FC<AnswerInfoProps> = ({ questionId }) => {
    // State to hold the selected choice's ID
    const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

    // Create a unique identifier for this answer using the questionId
    const answerId = `answer[${questionId}]`;

    // Load saved choice ID from sessionStorage when the component mounts or selectedChoiceId changes
    useEffect(() => {
        const savedChoiceId = sessionStorage.getItem(answerId);
        if (savedChoiceId !== null) {
            setSelectedChoiceId(savedChoiceId);
        }
    }, [answerId, selectedChoiceId]);

    // Handler for choice selection change
    const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChoiceId = event.target.value;
        setSelectedChoiceId(newChoiceId);
        sessionStorage.setItem(answerId, newChoiceId);
    };

    // Handler to clear the selected choice and remove from sessionStorage
    const handleClearClick = () => {
        setSelectedChoiceId(null);
        sessionStorage.removeItem(answerId);
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title className="mb-0">Answer</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        {/* Render each choice */}
                        {choices && choices.map((editor: AnswerModel, index: number) => (
                            <Col md={6} key={index} className='answer-editor'>
                                <span>{String.fromCharCode(65 + index)}.{' '}</span> {/* Set ABCD... label */}
                                <Form.Check
                                    inline
                                    label={<span dangerouslySetInnerHTML={{ __html: editor.answerText }} />}
                                    type='radio'
                                    name={"correctAnswer"}
                                    value={`${questionId}_${editor.answerText}`}
                                    checked={selectedChoiceId === `${questionId}_${editor.answerText}`}
                                    onChange={handleChoiceChange}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col md={12} className='mt-3'>
                            <Button variant="danger" onClick={handleClearClick}>Clear</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default TrueOrFalse;

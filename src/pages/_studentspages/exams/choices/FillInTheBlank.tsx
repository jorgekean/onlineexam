import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

interface AnswerInfoProps {
    questionId: string;
}

const FillInTheBlank: React.FC<AnswerInfoProps> = ({ questionId }) => {
    // Create a unique identifier for this answer using the questionId
    const answerId = `answer[${questionId}]`;

    // State to hold the text value
    const [text, setText] = useState<string>('');

    // Load saved text from sessionStorage when the component mounts or questionId changes
    useEffect(() => {
        const savedText = sessionStorage.getItem(answerId);
        // Split savedText to extract only the text value without the questionId prefix
        setText(savedText ? savedText.split("_")[1] : '');
    }, [questionId]);

    // Save the text to sessionStorage whenever it changes
    useEffect(() => {
        if (text) {
            // Combine the questionId and text to store as the value
            sessionStorage.setItem(answerId, `${questionId}_${text}`);
        }
    }, [text]);

    // Handler for text change in the input
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setText(newText);
    };

    // Handler to clear the text and remove from sessionStorage
    const handleClearClick = () => {
        setText('');
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
                        <Col md={12} className='answer-editor'>
                            <Form.Control
                                type="text"
                                placeholder="correctAnswer"
                                value={text}
                                onChange={handleTextChange}
                                required
                            />
                        </Col>
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

export default FillInTheBlank;

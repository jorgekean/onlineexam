import { faAdd, faCheck, faCheckSquare, faList, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { useContext, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap'
import MyEditor, { EditorContent } from '../MyEditor';

interface EditorAnswer {
    editorContent: EditorContent;
    isCorrect: boolean;
}

const defaultChoices = [
    { editorContent: undefined, isCorrect: false },
    { editorContent: undefined, isCorrect: false },
    { editorContent: undefined, isCorrect: false },
    { editorContent: undefined, isCorrect: false },
]

const MultipleChoice = () => {
    const [editors, setEditors] = useState<EditorAnswer[]>(defaultChoices);
    const [selectedCorrectIndex, setSelectedCorrectIndex] = useState<number | null>(null);

    const handleEditorChange = (index: number, content: EditorContent) => {
        setEditors((prevEditors) => {
            const newEditors = [...prevEditors];
            newEditors[index] = { ...newEditors[index], editorContent: content };
            return newEditors;
        });
    };

    const handleCorrectnessChange = (index: number, isCorrect: boolean) => {
        setEditors((prevEditors) => {
            const newEditors = [...prevEditors];
            newEditors[index] = { ...newEditors[index], isCorrect };
            return newEditors;
        });

        if (isCorrect) {
            setSelectedCorrectIndex(index);
        } else {
            setSelectedCorrectIndex(null);
        }
    };


    const handleAddEditor = () => {
        setEditors((prevEditors) => [...prevEditors, { editorContent: undefined, isCorrect: false }]);
    };

    const handleRemoveEditor = (index: number) => {
        setEditors((prevEditors) => {
            const newEditors = [...prevEditors];
            newEditors.splice(index, 1);
            return newEditors;
        });
    };

    // Helper function to generate labels (A, B, C, D, and so on) based on index
    const getLabelForIndex = (index: number) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[index];
    };

    return (
        <div className='mb-4'>
            <Row>
                {editors.map((editor, index) => (
                    <Col md={6} key={index} className='answer-editor'>
                        <Form.Check
                            inline
                            label={getLabelForIndex(index)}
                            type="radio"
                            name="choices"
                            value="true" // Set the value for the "Enable" option
                            // checked={formState.specialNeeds === "true"} // Check if it's selected
                            onChange={(e) => handleCorrectnessChange(index, e.target.checked)}
                        />
                        {selectedCorrectIndex === index && editor.isCorrect && (
                            <Badge bg="success">
                                <FontAwesomeIcon icon={faCheckSquare} /> Correct
                            </Badge>
                        )}
                        <MyEditor value={editor.editorContent} onChange={(content) => handleEditorChange(index, content)} />
                        <Button size='sm' title='Remove Choice' variant='danger' onClick={() => handleRemoveEditor(index)}><FontAwesomeIcon icon={faTrash} /></Button>
                    </Col>
                ))}
            </Row>
            <Button size='sm' onClick={handleAddEditor} className='mt-1'><FontAwesomeIcon icon={faAdd} /> Add New Choice</Button>
        </div>

    )
}

export default MultipleChoice
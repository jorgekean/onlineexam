import { faList, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
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

    return (
        <React.Fragment>
            <Row>
                {editors.map((editor, index) => (
                    <Col md={6} key={index}>
                        <input
                            type="radio"
                            checked={editor.isCorrect}
                            name='choices'
                            onChange={(e) => handleCorrectnessChange(index, e.target.checked)}
                        />
                        <MyEditor value={editor.editorContent} onChange={(content) => handleEditorChange(index, content)} />
                        <Button onClick={() => handleRemoveEditor(index)}>Remove Editor</Button>
                    </Col>
                ))}
            </Row>
            <Button onClick={handleAddEditor}>Add New Choice</Button>
        </React.Fragment>

    )
}

export default MultipleChoice
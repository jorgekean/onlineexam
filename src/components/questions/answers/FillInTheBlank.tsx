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


const FillInTheBlank = () => {
   

    return (
        <Form.Group className="mb-3 question-editor">
            <Form.Label>Question</Form.Label>
            <Form.Control
                type="text"
                name="group"
                placeholder="Group Name"
                value={formState.group}
                onChange={handleInputChange}
                required
                className={errors.group ? 'is-invalid' : ''}
            />
        </Form.Group>
    )
}

export default FillInTheBlank
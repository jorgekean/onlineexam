import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";

interface ExamInstructionModalProps {
    show: boolean;
    onClose: () => void;
    onSave?: () => void;
    headerText?: string;
    okText?: string;
    // Use the '...rest' pattern to capture other props
    [key: string]: any;
}

const ExamInstructionModal: React.FC<ExamInstructionModalProps> = ({ show, onClose, onSave, headerText, modalContent, okText, ...rest }) => {
    return (
        <Modal show={show} onHide={onClose} {...rest}>

            <Modal.Header closeButton><h3>{headerText ? headerText : 'Instructions'}</h3></Modal.Header>
            <Modal.Body className="m-3">
                <p>
                    Exam Instructions
                </p>
                <p>
                    The duration has been predetermined by the teacher. The timer for the exam is continuous, meaning you won't have the ability to pause or stop it. Once the allotted time is up, the exam will automatically conclude. Alternatively, you can choose to finish the exam by clicking the designated "Finish" button at any point, which will bring the exam to an end. Be aware that after using the "Finish" button or when the timer expires, you won't be able to revise your answers further. Good luck!
                </p>
                <Form.Check
                    inline
                    label="I have read and understood the terms and instructions."
                    name="agreement"
                    value="true" // Set the value for the "Enable" option
                // checked={} // Check if it's selected
                // onChange={handleInputChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>{" "}
                <Button variant={"primary"} onClick={onSave}>
                    <FontAwesomeIcon icon={faClockRotateLeft} /> {okText ? okText : 'Save changes'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ExamInstructionModal

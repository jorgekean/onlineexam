import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DefaultModalProps {
    show: boolean;
    onClose: () => void;
    onSave?: () => void;
    headerText?: string;
    modalContent: React.ReactNode; // Allow any JSX element as modal content
    okText?: string;
    // Use the '...rest' pattern to capture other props
    [key: string]: any;
}

const DefaultModal: React.FC<DefaultModalProps> = ({ show, onClose, onSave, headerText, modalContent, okText, ...rest }) => {
    return (
        <Modal show={show} onHide={onClose} {...rest}>
            <Modal.Header closeButton><h3>{headerText ? headerText : 'Modal'}</h3></Modal.Header>
            <Modal.Body className="text-center m-3">
                {modalContent}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>{" "}
                <Button variant={"primary"} onClick={onSave}>
                    {okText ? okText : 'Save changes'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DefaultModal

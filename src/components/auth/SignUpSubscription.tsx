import React from "react";

import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserClock, faVideo } from "@fortawesome/free-solid-svg-icons";


function SignUpSubscription() {

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <Card.Title className="mb-0">Choose Your Plan</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mb-2">
                        <Form.Check
                            type="radio"
                            name="radios-example"
                            id="radio-free-plan"
                            label={
                                <div>
                                    <span className="d-block font-weight-bold">Free Plan.</span>
                                    <span className="d-block small mb-2">No extra charges. Free forever.</span>
                                    <span className="d-block small"><FontAwesomeIcon icon={faClock} /> 25 Exam Attempts per month.</span>
                                    <span className="d-block small"><FontAwesomeIcon icon={faUserClock} /> No Instructor Accounts.</span>
                                    <span className="d-block small"><FontAwesomeIcon icon={faVideo} /> No Proctoring Service.</span>
                                </div>
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Check
                            type="radio"
                            name="radios-example"
                            id="radio-tier1-plan"
                            label={
                                <div>
                                    <span className="d-block font-weight-bold">Pro Plan $240 / Year <Badge bg="success">Most Popular!</Badge></span>
                                    <span className="d-block small">Bill annually. Effective cost $20 / Month</span>
                                    <span className="d-block small font-weight-bold">Enjoy 54% Savings.</span>
                                </div>
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Check
                            type="radio"
                            name="radios-example"
                            id="radio-tier2-plan"
                            label={
                                <div>
                                    <span className="d-block font-weight-bold">Pro Plan $37 / Month</span>
                                    <span className="d-block small">Less on pocket, more on effectiveness.</span>
                                </div>
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Check
                            type="radio"
                            name="radios-example"
                            id="radio-tier3-plan"
                            label={
                                <div>
                                    <span className="d-block font-weight-bold">Ultimate Plan $1500 / Year</span>
                                    <span className="d-block small">The Ultimate Power</span>
                                    <span className="d-block small">Bill Annually, Effective cost $125/Month</span>
                                    <span className="d-block small font-weight-bold">Enjoy 31% Savings.</span>
                                </div>
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Check
                            type="radio"
                            name="radios-example"
                            id="radio-tier4-plan"
                            label={
                                <div>
                                    <span className="d-block font-weight-bold">Ultimate Plan Monthly</span>
                                    <span className="d-block small">Less on pocket, more on effectiveness.</span>
                                </div>
                            }
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SignUpSubscription;

import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

import Main from "../components/Main";
import Settings from "../components/Settings";

interface AuthSignupProps {
    children?: ReactNode;
}

const AuthSignUp: React.FC<AuthSignupProps> = ({ children }) => (
    <React.Fragment>
        <Main className="d-flex w-100 justify-content-center">
            <Container className="d-flex flex-column">
                <Row className="h-100">
                    <Col className="mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            {children}
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Main>
        {/* <Settings /> */}
    </React.Fragment>
);

export default AuthSignUp;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/bee-see-new-logo-small.png";

import SignUp from "../../components/auth/SignUp";
import SignUpSubscription from "../../components/auth/SignUpSubscription";


const SignUpPage = () => (
  <React.Fragment>
    <Helmet title="Sign Up" />
    <div className="text-center mt-4">
      <img
        src={logo}
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '300px' }}
      />
    </div>
    <Container fluid className="p-0">
      {/* <h1 className="h3 mb-3">Create your onlineexam Account</h1> */}

      <Row>
        <Col lg="6">
          <SignUp />
        </Col>
        <Col lg="6">
          <SignUpSubscription />
        </Col>
      </Row>
    </Container>
    {/* <Card>
      <Card.Body>
        <div className="m-sm-3">
          <SignUp />
          <SignUpSubscription />
        </div>
      </Card.Body>
    </Card> */}

  </React.Fragment>
);

export default SignUpPage;

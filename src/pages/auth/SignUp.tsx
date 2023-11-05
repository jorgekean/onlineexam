import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import SignUp from "../../components/auth/SignUp";



const SignUpPage = () => (
  <React.Fragment>
    <Helmet title="Sign Up" />
    <div className="text-center mt-4">
      <img
        src={logo}
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '200px', marginBottom: '10px' }}
      />
      {<div className="lead"
        style={{ height: '20px' }}
      >
      </div>}
    </div>
    <Container fluid className="p-0">

      <Row>
        <Col lg="3">
        </Col>
        <Col lg="6">
          <SignUp />
        </Col>
      </Row>
    </Container>

  </React.Fragment>
);

export default SignUpPage;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import ResetPassword from "../../components/auth/ResetPassword";
import { myAppConfig } from "../../config";

const ResetPasswordPage = () => (
  <React.Fragment>
    <Helmet title="Reset Password" />
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

    <Card>
      <Card.Body>
        <div className="m-sm-3">
          <ResetPassword />
        </div>
      </Card.Body>
    </Card>
    <div className="text-center mb-1 small">
      Please Contact <b><a href="mailto:support@eksam.ph">support@eksam.ph</a></b> in case of any query.
    </div>
    <div className="text-center mb-1 small">
      Don't have an account? <Link to={`${myAppConfig.baseURL}/auth/sign-up`}>Register a student account</Link>
    </div>
  </React.Fragment>
);

export default ResetPasswordPage;

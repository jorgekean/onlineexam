import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/bee-see-new-logo-small.png";

import ResetPassword from "../../components/auth/ResetPassword";

const ResetPasswordPage = () => (
  <React.Fragment>
    <Helmet title="Reset Password" />
    <div className="text-center mt-4">
      <img
        src={logo}
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '300px' }}
      />
      <h1 className="h2">Reset password</h1>
      <p className="lead">Enter your email to reset your password.</p>
    </div>

    <Card>
      <Card.Body>
        <div className="m-sm-3">
          <ResetPassword />
        </div>
      </Card.Body>
    </Card>
    <div className="text-center mb-1 small">
      Please Contact <b><a href="mailto:support@onlineexam.net">support@onlineexam.net</a></b> in case of any query.
    </div>
    <div className="text-center mb-1 small">
      Don't have a onlineexam account? <Link to="/auth/sign-up">Create for free</Link>
    </div>
  </React.Fragment>
);

export default ResetPasswordPage;

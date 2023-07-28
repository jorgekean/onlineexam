import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignIn from "../../components/auth/SignIn";

import logo from "../../assets/img/bee-see-new-logo-small.png";

const SignInPage = () => (
  <React.Fragment>
    <Helmet title="Sign In" />
    <div className="text-center mt-4">
      <img
        src={logo}
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '300px' }}
      />
      <p className="lead">Administrative Signin</p>
    </div>

    <Card>
      <Card.Body>
        <div className="m-sm-3">
          <SignIn />
        </div>
      </Card.Body>
    </Card>
    <div className="text-center mb-3 small">
      Please Contact <b><a href="mailto:support@onlineexam.net">support@onlineexam.net</a></b> in case of any query.
    </div>
    <div className="text-center mb-3 small">
      Don't have a onlineexam account? <Link to="/onlineexam/auth/sign-up">Create for free</Link>
    </div>
  </React.Fragment>
);

export default SignInPage;

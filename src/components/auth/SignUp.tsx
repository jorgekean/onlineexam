import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Card, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import useAuth from "../../hooks/useAuth";
import { myAppConfig } from "../../config";

function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  return (
    <Formik
      initialValues={{
        // firstName: "",
        // lastName: "",
        email: "",
        password: "",
        howDidYouFound: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required("First name is required"),
        lastName: Yup.string().max(255).required("Last name is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string()
          .min(12, "Must be at least 12 characters")
          .max(255)
          .required("Required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          signUp(
            values.email,
            values.password,
            values.howDidYouFound
          );
          navigate(`${myAppConfig.baseURL}/auth/sign-in`);
        } catch (error: any) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <>
          <Card>
            <Card.Header>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {errors.submit && (
                  <Alert className="my-3" variant="danger">
                    {errors.submit}
                  </Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder=""
                    value={values.email}
                    isInvalid={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {!!touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Learner Reference Number (LRN)</Form.Label>
                  <Form.Control
                    type="text"
                    name="studentNumber"
                    placeholder=""
                    value={values.email}
                    isInvalid={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {!!touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder=""
                    value={values.email}
                    isInvalid={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {!!touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <small>
                  <Form.Check inline label={
                    <span>
                      I accept the{' '}
                      <Link to={`${myAppConfig.baseURL}/`}>Privacy Policy</Link> and <Link to="/">Terms of Use</Link>
                    </span>
                  } />
                </small>
                <div className="d-grid gap-2 mt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    Register a Student Account
                  </Button>
                </div>
                <div className="text-center mt-3">
                  Already have account? <Link to={`${myAppConfig.baseURL}/auth/sign-in`}>Log in</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>

        </>
      )}
    </Formik>
  );
}

export default SignUp;

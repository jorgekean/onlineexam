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
          navigate(`/${myAppConfig.baseURL}/auth/sign-in`);
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
              <Card.Title>Create your onlineexam Account</Card.Title>

            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {errors.submit && (
                  <Alert className="my-3" variant="danger">
                    {errors.submit}
                  </Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email address"
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    isInvalid={Boolean(touched.password && errors.password)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {!!touched.password && (
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>How did you find out about onlineexam?</Form.Label>
                  <Form.Select
                    name="howDidYouFound"
                    value={values.howDidYouFound}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.howDidYouFound && !!errors.howDidYouFound}
                  >
                    <option value="">Select an option</option>
                    <option value="google_search">Google Search</option>
                    <option value="facebook_ad">Facebook Ad</option>
                    <option value="instagram_ad">Instagram Ad</option>
                    <option value="twitter_ad">Tiwtter Ad</option>
                    <option value="web_mobile_ad">Website/Mobile App Ad</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  {touched.howDidYouFound && (
                    <Form.Control.Feedback type="invalid">
                      {errors.howDidYouFound}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <small>
                  <Form.Check inline label={
                    <span>
                      I accept OnlineExam's{' '}
                      <Link to={`/${myAppConfig.baseURL}/`}>Privacy Policy</Link> and <Link to="/">Terms of Use</Link>
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
                    Sign up
                  </Button>
                </div>
                <div className="text-center mt-3">
                  Already have account? <Link to="/onlineexam/auth/sign-in">Log in</Link>
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

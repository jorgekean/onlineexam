import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import {
  Code,
  DownloadCloud,
  Mail,
  Sliders,
  Smartphone,
  Users,
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  LAYOUT,
  THEME,
} from "../../constants";

import useTheme from "../../hooks/useTheme";
import useSidebar from "../../hooks/useSidebar";
import useLayout from "../../hooks/useLayout";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import screenshotMixed from "../../assets/img/screenshots/mixed.jpg";
import screenshotThemeDefault from "../../assets/img/screenshots/theme-default.jpg";
import screenshotThemeDark from "../../assets/img/screenshots/theme-dark.jpg";
import screenshotThemeColored from "../../assets/img/screenshots/theme-colored.jpg";
import screenshotThemeLight from "../../assets/img/screenshots/theme-light.jpg";
import screenshotSidebarCompact from "../../assets/img/screenshots/sidebar-compact.jpg";
import screenshotSidebarRight from "../../assets/img/screenshots/sidebar-right.jpg";

import screenshotDashboardDefault from "../../assets/img/screenshots/dashboard-default.jpg";
import screenshotDashboardAnalytics from "../../assets/img/screenshots/dashboard-analytics.jpg";
import screenshotDashboardSaaS from "../../assets/img/screenshots/dashboard-saas.jpg";
import screenshotDashboardSocial from "../../assets/img/screenshots/dashboard-social.jpg";
import screenshotDashboardCrypto from "../../assets/img/screenshots/dashboard-crypto.jpg";
import screenshotPageProjects from "../../assets/img/screenshots/pages-projects-list.jpg";

import brandBootstrap from "../../assets/img/brands/bootstrap.svg";
import brandReact from "../../assets/img/brands/react.svg";
import brandRedux from "../../assets/img/brands/redux.svg";
import brandReactRouter from "../../assets/img/brands/react-router.svg";
import brandCognito from "../../assets/img/brands/cognito.svg";
import brandAuth0 from "../../assets/img/brands/auth0.svg";
import brandJWT from "../../assets/img/brands/jwt.svg";
import brandESLint from "../../assets/img/brands/eslint.svg";
import brandJavaScript from "../../assets/img/brands/javascript.svg";
import brandTypeScript from "../../assets/img/brands/typescript.svg";
import useAuth from "../../hooks/useAuth";
import { myAppConfig } from "../../config";



const Intro = () => (
  <section className="landing-intro pt-5 pt-lg-6 pb-5 pb-lg-7">
    <Container className="landing-intro-content">
      <Row className="align-items-center">
        <Col lg="5" className="mx-auto">
          <Badge bg="" className="badge-soft-primary p-1">
            v3.1.0
          </Badge>

          <div className="my-4">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Available for JavaScript</Tooltip>}
            >
              <img
                width="40"
                height="40"
                src={brandJavaScript}
                alt="JavaScript"
                className="d-inline-block me-2"
              />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Available for TypeScript</Tooltip>}
            >
              <img
                width="40"
                height="40"
                src={brandTypeScript}
                alt="TypeScript"
                className="d-inline-block"
              />
            </OverlayTrigger>
          </div>

          <h1 className="my-4">
            Fully-featured Dashboard Template based on{" "}
            <span className="text-primary">React & Bootstrap</span>
          </h1>

          <p className="text-lg">
            A professional package that comes with hundreds of UI components,
            forms, tables, charts, dashboards, pages and svg icons.
          </p>

          <div className="my-4">
            <div className="d-inline-block me-3">
              <h2 className="text-dark">500+</h2>
              <span className="text-muted">UI Components</span>
            </div>
            <div className="d-inline-block me-3">
              <h2 className="text-dark">1500+</h2>
              <span className="text-muted">SVG Icons</span>
            </div>
            <div className="d-inline-block">
              <h2 className="text-dark">45+</h2>
              <span className="text-muted">Pages</span>
            </div>
          </div>
          <div className="my-4">
            <a href="#demos" className="btn btn-primary btn-pill btn-lg me-2">
              Live Demo
            </a>
            <a
              href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-pill btn-lg me-1"
            >
              Purchase
            </a>
          </div>
        </Col>
        <Col lg="7" className="d-none d-lg-flex mx-auto text-center">
          <div className="landing-intro-screenshot pb-3">
            <img
              src={screenshotMixed}
              alt="Dark/Light Bootstrap React Admin Template"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const ColorSchemesAndLayouts = () => (
  <section className="py-6 bg-white">
    <Container className="position-relative z-3">
      <Row>
        <Col md="12" className="mx-auto text-center">
          <Row>
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="mb-4">
                <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
                  Demos
                </span>
                <h2 className="h1 mb-3">
                  Multiple color schemes &amp; layouts
                </h2>
                <p className="text-muted fs-lg">
                  4 Pre-built color schemes and multiple layout types are
                  available to make this template your very own. All the color
                  schemes can take variation in color and styling, that can
                  easily be modified using Sass variables.
                </p>
              </div>
            </div>
          </Row>

          <Row>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?theme=default"
              >
                <img
                  src={screenshotThemeDefault}
                  className="img-fluid rounded-lg landing-img"
                  alt="Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Default</h4>
            </Col>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?sidebarBehavior=compact"
              >
                <img
                  src={screenshotSidebarCompact}
                  className="img-fluid rounded-lg landing-img"
                  alt="Compact Sidebar Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Compact sidebar{" "}
                <sup>
                  <Badge as="small" bg="primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?theme=dark"
              >
                <img
                  src={screenshotThemeDark}
                  className="img-fluid rounded-lg landing-img"
                  alt="Dark Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Dark{" "}
                <sup>
                  <Badge as="small" bg="primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?theme=colored"
              >
                <img
                  src={screenshotThemeColored}
                  className="img-fluid rounded-lg landing-img"
                  alt="Colored Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Colored{" "}
                <sup>
                  <Badge as="small" bg="primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?theme=light"
              >
                <img
                  src={screenshotThemeLight}
                  className="img-fluid rounded-lg landing-img"
                  alt="Light Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Light</h4>
            </Col>
            <Col md="4" className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?sidebarPosition=right"
              >
                <img
                  src={screenshotSidebarRight}
                  className="img-fluid rounded-lg landing-img"
                  alt="Right Sidebar Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Right sidebar{" "}
                <sup>
                  <Badge as="small" bg="primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);


const Footer = () => (
  <section className="landing-footer py-6">
    <Container className="text-center landing-footer-container">
      <Row>
        <Col md="9" lg="8" xl="6" className="mx-auto">
          <h2 className="h1 mb-3">
            Join over 5,000 developers who are already working with our products
          </h2>
          <Button
            variant="success"
            size="lg"
            href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-n1 btn-pill"
          >
            Get AppStack
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

const Landing = () => {
  const { setTheme } = useTheme();
  const { setPosition, setBehavior } = useSidebar();
  const { setLayout } = useLayout();
  const { user } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'teacher') {
      navigate(`${myAppConfig.baseURL}/dashboard`);
    } else if (user?.role === 'student') {
      navigate(`${myAppConfig.baseURL}/studentDashboard`);
    } else if (user?.role === 'schooladmin') {
      navigate(`${myAppConfig.baseURL}/schoolDashboard`);
    }

    // setTheme(THEME.DEFAULT);
    // setPosition(SIDEBAR_POSITION.LEFT);
    // setBehavior(SIDEBAR_BEHAVIOR.STICKY);
    // setLayout(LAYOUT.FLUID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {/* <Intro /> */}

    </React.Fragment>
  );
};

export default Landing;

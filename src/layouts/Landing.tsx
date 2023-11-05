import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Main from "../components/Main";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/img/logo.svg"

interface LandingProps {
  children?: ReactNode;
}

const Navigation = () => (
  <Navbar expand="md" className="landing-navbar">
    <Container>
      <Navbar.Brand className="landing-brand" href="/">
        <Logo /> OnlineExam{" "}
        <Badge as="sup" bg="" className="badge-soft-primary p-1">
          BeeSee
        </Badge>
      </Navbar.Brand>
      <Nav className="ms-auto" navbar>
        <Nav.Item className="d-none d-md-inline-block">
          <Nav.Link
            href="/dashboard/default"
            target="_blank"
            rel="noreferrer"
            active
            className="text-lg px-lg-3"
          >
            Live Preview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/docs/introduction"
            target="_blank"
            rel="noreferrer"
            active
            className="text-lg px-lg-3"
          >
            Documentation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-md-inline-block">
          <Nav.Link
            href="mailto:support@bootlab.io"
            active
            className="text-lg px-lg-3"
          >
            Support
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Button
        href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
        target="_blank"
        rel="noopener noreferrer"
        variant="success"
        className="ms-2 btn-pill"
        size="lg"
      >
        Get AppStack
      </Button>
    </Container>
  </Navbar>
);

const Landing: React.FC<LandingProps> = ({ children }) => (
  <Main>
    {/* <Navigation /> */}
    {children}
    <Outlet />
  </Main>
);

export default Landing;

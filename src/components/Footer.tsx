import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="text-muted">
        <Col xs="6" className="text-start">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span className="text-muted">Support</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Help Center</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Privacy</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Terms of Service</span>
            </li>
            <li className="list-inline-item">
              <span className="text-muted">Image by <a href="https://www.freepik.com/free-vector/set-four-college-vintage-stickers_919706.htm#query=school%20logo&position=23&from_view=search&track=ais#position=23&query=school%20logo" target="_blank">Freepik</a></span>
            </li>
          </ul>
        </Col>
        <Col xs="6" className="text-end">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} -{" "}
            <span className="text-muted"><a href="https://beesee.ph" target="_blank">BeeSee Global</a></span>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

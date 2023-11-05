import React from "react";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Appointments = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <div className="card-actions float-end">
        {/* <Dropdown align="end">
          <Dropdown.Toggle as="a" bsPrefix="-">
            <MoreHorizontal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <Card.Title className="mb-0">Activities</Card.Title>
    </Card.Header>
    <Card.Body className="d-flex">
      <ul className="timeline">
        <li className="timeline-item">
          <strong>Student 1 - Math Periodical Started</strong>
          <span className="float-end text-muted text-sm">18 mins ago</span>
          <p>
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
            mauris...
          </p>
        </li>
        <li className="timeline-item">
          <strong>Student 2 - Science Periodical Finished</strong>
          <span className="float-end text-muted text-sm">1 hr ago</span>
          <p>
            Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing.
            Phasellus ullamcorper ipsum rutrum nunc...
          </p>
        </li>
        <li className="timeline-item">
          <strong>Student 3 - English Periodical Finished</strong>
          <span className="float-end text-muted text-sm">Aug 10</span>
          <p>
            Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
            imperdiet, leo. Maecenas malesuada...
          </p>
        </li>
        <li className="timeline-item">
          <strong>Final Exam</strong>
          <span className="float-end text-muted text-sm">Dec 3</span>
          <p className="mb-0">
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum...
          </p>
        </li>
      </ul>
    </Card.Body>
  </Card>
);

export default Appointments;

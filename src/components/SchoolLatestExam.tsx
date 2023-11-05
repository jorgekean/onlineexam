import React from "react";

import { Badge, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const SchoolLatestExam = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <div className="card-actions float-end">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" bsPrefix="-">
            <MoreHorizontal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Card.Title className="mb-0">Latest Exams</Card.Title>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Start Date</th>
          <th className="d-none d-xl-table-cell">Time</th>
          <th>Status</th>
          <th className="d-none d-md-table-cell">Teacher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physics Finals Grade5</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">8:00 AM</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>PE Finals Grade5</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">9:00 AM</td>
          <td>
            <Badge bg="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>History Finals Grade5</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">10:00 AM</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
        <tr>
          <td>Project Nitro</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">11:00 AM</td>
          <td>
            <Badge bg="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>Recess Finals Grade5</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">12:00 PM</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Romeo</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Ashley Briggs</td>
        </tr>
        <tr>
          <td>Project Wombat</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">1:00 PM</td>
          <td>
            <Badge bg="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Zircon</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">2:00 PM</td>
          <td>
            <Badge bg="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default SchoolLatestExam;

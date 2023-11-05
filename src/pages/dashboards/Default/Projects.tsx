import React from "react";

import { Badge, Button, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const data = [
  { label: "Monitor your Live exams", action: "Monitor" },
  { label: "Transfer Questions", action: "Transfer" },
  { label: "Manage Certificates", action: "Certificates" },
  { label: "Send email to candidates", action: "Email" }
];

const Projects = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <div className="card-actions float-end">
      </div>
      <Card.Title className="mb-0">Tasks</Card.Title>
    </Card.Header>
    <Table>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.label}</td>
            <td className="d-flex justify-content-end">
              <Button className="w-50" variant="outline-primary">{row.action}</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Card>
);

export default Projects;

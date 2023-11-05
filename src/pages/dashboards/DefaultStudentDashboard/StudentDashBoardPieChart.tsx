import React from "react";
import { Pie } from "react-chartjs-2";

import { Card, Dropdown, Tab, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import usePalette from "../../../hooks/usePalette";

const StudentDashboardPieChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          palette.primary,
          palette.warning,
          palette.danger,
          "#E8EAED",
        ],
        borderWidth: 1,
        borderColor: palette.white,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
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
        <Card.Title className="mb-0">Student Performance</Card.Title>
      </Card.Header>

      <Card.Body className="d-flex">
        <div className="align-self-center w-100">

          <div className="py-3 d-flex">
            <div className="chart chart-s">
              <Pie data={data} options={options} />
            </div>
            <Table className="mb-0">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                    Math
                  </td>
                  <td className="text-end">2602</td>
                  <td className="text-end text-success">83%</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                    Science
                  </td>
                  <td className="text-end">1853</td>
                  <td className="text-end text-success">80%</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                    OOP II
                  </td>
                  <td className="text-end">1541</td>
                  <td className="text-end text-success">78%</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faSquare} className="text-dark" />{" "}
                    PE
                  </td>
                  <td className="text-end">1265</td>
                  <td className="text-end text-success">72%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentDashboardPieChart;

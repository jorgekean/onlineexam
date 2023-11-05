import React from "react";
import { Bar, Line } from "react-chartjs-2";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import usePalette from "../../../hooks/usePalette";

const SchoolDashBoardBarChart = () => {
  const palette = usePalette();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Passed",
        backgroundColor: palette.success,
        borderColor: palette.success,
        hoverBackgroundColor: palette.success,
        hoverBorderColor: palette.success,
        data: [80, 67, 76, 66, 70, 78, 65, 73, 68, 76, 67, 79],

      },
      {
        label: "Failed",
        backgroundColor: palette.danger,
        borderColor: palette.danger,
        hoverBackgroundColor: palette.danger,
        hoverBorderColor: palette.danger,
        data: [29, 13, 24, 48, 52, 51, 44, 53, 52, 35, 31, 48],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 15,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
        },
        stacked: false,
      },
      x: {
        grid: {
          color: "transparent",
        },
        stacked: false,
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
        <Card.Title className="mb-0">Passed / Failed Comparison</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex">
        <div className="align-self-center w-100">
          <div className="chart chart-lg">
            <Line data={data} options={options} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SchoolDashBoardBarChart;

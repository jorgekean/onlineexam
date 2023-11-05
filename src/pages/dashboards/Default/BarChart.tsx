import React from "react";
import { Bar, Line } from "react-chartjs-2";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import usePalette from "../../../hooks/usePalette";

const BarChart = () => {
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
        label: "Failed",
        backgroundColor: palette.danger,
        borderColor: palette.danger,
        hoverBackgroundColor: palette.danger,
        hoverBorderColor: palette.danger,
        data: [22, 12, 3, 8, 26, 12, 1, 7, 3, 0, 5, 7],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
      },
      {
        label: "Passed",
        backgroundColor: palette.success,
        borderColor: palette.success,
        hoverBackgroundColor: palette.success,
        hoverBorderColor: palette.success,
        data: [23, 32, 12, 19, 27, 27, 23, 57, 43, 34, 39, 70],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
        borderRadius: 99,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 15,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10,
        },
        stacked: true,
      },
      x: {
        grid: {
          color: "transparent",
        },
        stacked: true,
      },
    },
  };

  return (
    <Card className="flex-fill w-100">
      <Card.Header>

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

export default BarChart;
